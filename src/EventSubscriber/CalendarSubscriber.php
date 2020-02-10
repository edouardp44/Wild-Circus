<?php

namespace App\EventSubscriber;

use App\Repository\ShowTourRepository;
use CalendarBundle\CalendarEvents;
use CalendarBundle\Entity\Event;
use CalendarBundle\Event\CalendarEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class CalendarSubscriber implements EventSubscriberInterface
{
    private $showTourRepository;
    private $router;

    public function __construct(
        ShowTourRepository $showTourRepository,
        UrlGeneratorInterface $router
    ) {
        $this->showTourRepository = $showTourRepository;
        $this->router = $router;
    }

    public static function getSubscribedEvents()
    {
        return [
            CalendarEvents::SET_DATA => 'onCalendarSetData',
        ];
    }

    public function onCalendarSetData(CalendarEvent $calendar)
    {
        $start = $calendar->getStart();
        $end = $calendar->getEnd();
        $filters = $calendar->getFilters();

        // Modify the query to fit to your entity and needs
        // Change booking.beginAt by your start date property

        $showTours = $this->showTourRepository->whenBeginAtBetweenEndAT(
            $start->format('Y-m-d H:i:s'),
            $end->format('Y-m-d H:i:s'));

        foreach ($showTours as $showTour) {
            // this create the events with your data (here booking data) to fill calendar
            $showTourEvent = new Event(
                $showTour->getCity(),
                $showTour->getBeginAt(),
                $showTour->getEndAt() // If the end date is null or not defined, a all day event is created.
            );

            /*
             * Add custom options to events
             *
             * For more information see: https://fullcalendar.io/docs/event-object
             * and: https://github.com/fullcalendar/fullcalendar/blob/master/src/core/options.ts
             */

            $showTourEvent->addOption(
                'url',
                $this->router->generate('show_tour_show', [
                    'id' => $showTour->getId(),
                ])
            );

            // finally, add the event to the CalendarEvent to fill the calendar
            $calendar->addEvent($showTourEvent);
        }
    }
}