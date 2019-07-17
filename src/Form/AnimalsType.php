<?php

namespace App\Form;

use App\Entity\Animals;
use App\Entity\AnimalsCategory;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AnimalsType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', TextType::class, ['label' => 'nom'])
            ->add('description', TextType::class, ['label' => 'description'])
            ->add('image', FileType::class, [
                'label' => 'image',
                'mapped' => false,
            ])
        ;
        $builder->add('category', EntityType::class, [
            'class' => AnimalsCategory::class,
            'choice_label' => 'name',
            'by_reference' => false,
        ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Animals::class,
        ]);
    }
}
