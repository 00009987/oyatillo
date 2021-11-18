// Importing some garbage created by
// Micrsofot here... (classes)
using System;
using System.Collections.Generic;
using System.Text;


// Spamming project name
// in order to be able to
// share instances, typical
// java shit behaivor
namespace CarSelling
{
    // Any program must have
    // Program class startpoint
     class Program
    {
        // Assume that this variable will
        // be used later to store user
        // input which is target to search
        private static object search;

        // Startpoint main program where
        // everything begins from here
        static void Main(string[] args)
        {
            // In javascript this line below be like:
            // const listcars = new List(); whereas
            // this variable is an array which has the
            // same type of objects {} with
            // different values (classes)
            List<CarList> listcars = new List<CarList>();

            // Spamming with Add to add some infos to
            // that array
            listcars.Add(new CarList
            {
                // Mention that all value states are same
                // but values are different! Cuz those are
                // keys: values shaped
                Id = 10,
                brand = "bmw",
                price = 100,
                year = "2000"
            });

            // Another one!
            listcars.Add(new CarList
            {
                Id = 11,
                brand = "toyotta",
                price = 101,
                year = "2001"
            });

            // ANOTHER ONE!!!
            listcars.Add(new CarList
            {
                Id = 12,
                brand = "honda",
                price = 103,
                year = "2002"
            });

            // I guess Subair wanted to put some
            // decorations here
            Console.WriteLine("*********************");

            // Loop listcars array so on every
            // loop it puts info to CarList class
            // and then uses CarList.Display function
            // to show all states inside that class
            foreach (var cars in listcars)
            {
               // I'm about to destroy
               // your cpu & memory career!
                CarList cl = new CarList();
                cl.Display(cars.Id,cars.brand,cars.price,cars.year);

                // Decorations by Subair
                Console.WriteLine("*********************");
            }

            // It's time to ask user whether what is he
            // searchin' for... So, using ReadLine and
            // storing value of it to search which was
            // announced at the beginning of program
            Console.WriteLine("What do you want to search? ");
            search = Console.ReadLine();

           
            // Here, listcars is being looped and everytime it tests
            // whether string "search" is equal to Id variable from
            // listcars every car class and then stores result to a
            // a new variable
            CarList csearch = listcars.Find(Id => Id.brand.Equals(search));

            // If search above found something, then it will be equal to
            // a CarList class value which or if not, then it will remain
            // null

            // If variable after loop is not empty, then show it
            // or ditch the user saying not found!
            if (csearch != null)
            {
                    CarList cl = new CarList();

                    cl.Display(csearch.Id, csearch.brand, csearch.price, csearch.year);

                    Console.WriteLine("*********************");
            }
            else
            {
                Console.WriteLine("Not found");
            }

            // Waits user to input something so it
            // can end program!
            Console.ReadLine();

        }
    }
}
