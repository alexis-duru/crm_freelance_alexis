<?php

namespace App\DataFixtures;

use Faker\Factory;
use App\Entity\Invoice;
use App\Entity\Customer;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

const STATUS = ['SENDING', "CLOSE", "CANCEL"];

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i=0; $i < 10; $i++) { 
            $customer = new Customer();
            $customer
                ->setEmail($faker->companyEmail())
                ->setCompanyName($faker->words(2, true))
            ;

            $manager->persist($customer);

            for ($i=0; $i < rand(2, 9); $i++) { 
                $invoice = new Invoice();
                $invoice
                    ->setAmount($faker->numberBetween(900, 8000))
                    ->setSendingAt($faker->dateTimeBetween("-4 week", "+2 week"))
                    ->setStatus(STATUS[rand(0,2)])
                    ->setCustomer($customer)
                ;

                $manager->persist($invoice);
            }
        }
        

        $manager->flush();
    }
}