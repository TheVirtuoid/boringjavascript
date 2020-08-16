using System;

namespace EnumApplication {

   class EnumProgram {
      enum Animals { Cat, Dog, Horse };

      static void Main(string[] args) {
         int myCat = (int)Animals.Cat;
         int myDog = (int)Animals.Dog;
         int myHorse = (int)Animals.Horse;
         Console.WriteLine("My cat is {0}", myCat);
         Console.WriteLine("My dog is {0}", myDog);
         Console.WriteLine("My horse is {0}", myHorse);
      }
   }
}









// to compile: C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc /out:csharp.exe csharp.cs
