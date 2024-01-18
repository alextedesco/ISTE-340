//Alex Tedesco
//Project 3
//ISTE-340

// Imports:
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

        public async Task<IActionResult> People()
        {
            // Build a model to hold my data
            // go and get the data
            DataRetrieval dataR = new DataRetrieval();
            var loadedData = await dataR.GetData("people/");
            // turn the data into JSON
            // cast the JSON into my Model
            var rtnResult = JsonConvert.DeserializeObject<PeopleModel>(loadedData);
            // Add to the peopleModel to the pageTitle
            rtnResult.pageTitle = "iSchool - People";
            // Add more data to my Model
            // End the model to the View

            return View(rtnResult);
        }

        public async Task<IActionResult> Minors()
        {
            // Build a model to hold my data
            // go and get the data
            DataRetrieval dataR = new DataRetrieval();
            var loadedMinorData = await dataR.GetData("minors/");
            // Log or debug the loadedData
            // turn the data into JSON
            // cast the JSON into my Model
            var minorResult = JsonConvert.DeserializeObject<MinorModel>(loadedMinorData);

            var loadedCoursesData = await dataR.GetData("course/");

            // Log or debug the loadedData
            // turn the data into JSON
            // cast the JSON into my Model
            var coursesResult = JsonConvert.DeserializeObject<List<CoursesModel>>(loadedCoursesData);


            // Add more data to my Model
            // End the model to the View
            var viewModel = new MinorModel
            {
                pageTitle = "iSchool - Minors",
                UgMinors = minorResult.UgMinors,
                Courses = coursesResult
                // Add more data as needed
            };

            return View(viewModel);
        }

        public async Task<IActionResult> Degrees()
        {
            // Build a model to hold my data
            // go and get the data
            DataRetrieval dataR = new DataRetrieval();
            var loadedData = await dataR.GetData("degrees/");
            // turn the data into JSON
            // cast the JSON into my Model
            var rtnResult = JsonConvert.DeserializeObject<DegreeModel>(loadedData);
            // Add to the degreeModel to the pageTitle
            rtnResult.pageTitle = "iSchool - Degrees";
            // Add more data to my Model
            // End the model to the View

            return View(rtnResult);
        }

        public async Task<IActionResult> Employment()
        {
            // Build a model to hold my data
            // go and get the data
            DataRetrieval dataR = new DataRetrieval();
            var loadedData = await dataR.GetData("employment/");
            // turn the data into JSON
            // cast the JSON into my Model
            var rtnResult = JsonConvert.DeserializeObject<EmploymentModel>(loadedData);
            // Add to the employmentModel to the pageTitle
            rtnResult.pageTitle = "iSchool - Employment";
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