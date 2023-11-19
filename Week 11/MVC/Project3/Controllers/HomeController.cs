using Microsoft.AspNetCore.Mvc;
using Project3.Models;
using Project3.Services;
using System.Diagnostics;

namespace Project3.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public async IActionResult About()
        {
            // Build a model to hold my data
            // go and get the data
            dataRetrieval dataR = new dataRetrieval();
            var loadedData = await dataR.GetData("About/");
            // turn the data into JSON
            // cast the JSON into my Model
            // Add more data to my Model
            // End the model to the View

            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}