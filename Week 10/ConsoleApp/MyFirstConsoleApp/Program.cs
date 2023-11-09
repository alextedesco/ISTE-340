internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Hello, World");
        Console.WriteLine("What is your name");
        String name = Console.ReadLine();
        Console.WriteLine($"{Environment.NewLine}Hello there {name}");
    }
}