using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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

        public async Task<IActionResult> About()
        {
            // Build a model to hold my data
            // go and get the data
            DataRetrieval dataR = new DataRetrieval();
            var loadedData = await dataR.GetData("about/");
            // turn the data into JSON
            // cast the JSON into my Model
            var rtnResult = JsonConvert.DeserializeObject<AboutModel>(loadedData);
            // Add to the aboutModel to the pageTitle
            rtnResult.pageTitle = "I was added!";
            // Add more data to my Model
            // End the model to the View

            return View(rtnResult);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}