namespace Project3.Models
{
    public class MinorModel
    {
        public string pageTitle { get; set; }

        public List<CoursesModel> Courses { get; set; } = new List<CoursesModel>();

        public List<UgMinor> UgMinors { get; set; } = new List<UgMinor>();

        public class UgMinor
        {
            public string name { get; set; }
            public string title { get; set; }
            public string description { get; set; }
            public List<string> courses { get; set; }
            public string note { get; set; }
        }
    }
}
