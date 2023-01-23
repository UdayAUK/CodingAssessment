using System;

namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int GetFactorial(int n)
        {
            if (n > 1) return n * GetFactorial(n - 1);
            else return 1;
        }

        public static string FormatSeparators(params string[] items)
        {
          
           if(items.Length ==0)
            {
                return "";
            }
            else if (items.Length == 1)
                return items[0];
            else
            {
                string result = items[0];
                for (int i=1; i<items.Length; i++)
                {
                    if (i == items.Length-1)
                    {
                        result = result+ " and " + items[i];
                        break;
                    }
                    else
                    {
                        result = result+", " + items[i];
                    }

            }
                return result;
            }
          
        }
    }
}