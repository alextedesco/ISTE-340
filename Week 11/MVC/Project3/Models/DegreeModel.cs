namespace Project3.Models

{
    public class DegreeModel
    {
        public string pageTitle { get; set; }

        public List<Undergraduate> undergraduate { get; set; }

        public List<Graduate> graduate { get; set; }
    }
    public class Undergraduate
    {
        public string degreeName { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public List<string> concentrations { get; set; }
    }

    public class Graduate
    {
        public string degreeName { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public List<string> concentrations { get; set; } = new List<string>();
        public List<string> availableCertificates { get; set; } = new List<string>();
    }


}