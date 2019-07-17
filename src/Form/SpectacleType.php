<?php

namespace App\Form;

use App\Entity\Animals;
use App\Entity\Spectacle;
use App\Entity\Staff;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SpectacleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('image', FileType::class, [
                'label' => 'images',
                'data_class' => null
            ])
            ->add('name', TextType::class, ['label' => 'nom'])
            ->add('description',TextType::class, ['label' => 'description'])
        ;
        $builder
            ->add('staff', EntityType::class, [
                'class' => Staff::class,
                'choice_label' => 'name',
                'data_class' => null,
                'multiple' => true,
            ]);
        $builder
            ->add('animals', EntityType::class, [
                'class' => Animals::class,
                'choice_label' => 'name',
                'data_class' => null,
                'multiple' => true,
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Spectacle::class,
        ]);
    }
}
