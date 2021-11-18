// Importing some garbage created by
// Micrsofot here...
using System;
using System.Collections.Generic;
using System.Text;

// Project namespace so other
// file with same project can
// share classes with each other
namespace CarSelling
{
    // There, that boi created a class
    // which has 4 states "variables
    // inside object"
    class CarList
    {
        // Get Set refers that this variable
        // can change its value and return it (usable)
        // back like in that form(smth = CarList.Id)

        // This property has int which can be
        // numbers in range of -2,147,483,648 to 2,147,483,647
        public int Id { get; set; }

        // The same shit is happening here
        // but also with another types like
        // string whereas string is set of characters
        public string brand { get; set; }
        public int price { get; set; }
        public string year { get; set; }

        // When I do like: list = new CarList()
        // the line below gets executed before
        // we gonna proceed with working with states and methods
        public void Display(int Id, string brand, int price, string year)
        {
            // Just printing all informations
            // that was initialized with class
            Console.WriteLine("ID is : " + Id);
            Console.WriteLine("Brand is : " + brand);
            Console.WriteLine("Price is : " + price);
            Console.WriteLine("Year is : " + year);
        }
    }
}
