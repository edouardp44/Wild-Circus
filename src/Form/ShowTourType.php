<?php

namespace App\Form;

use App\Entity\Country;
use App\Entity\ShowTour;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ShowTourType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('city', TextType::class, [
                'label' => 'Ville'
            ])
            ->add('location', TextType::class, [
                'label' => 'Adresse'
            ])
            ->add('beginAt', DateType::class, [
                'label' => 'Commence le',
                'format' => 'dd-MM-yyyy'
            ])
            ->add('endAt', DateType::class, [
                'label' => 'Finis le',
                'format' => 'dd-MM-yyyy'
            ])
            ->add('country', EntityType::class, [
                'class' => Country::class,
                'choice_label' => 'region',
                'label' => 'La region',
                'data_class' => null,
                'expanded' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ShowTour::class,
        ]);
    }
}
