namespace Project3.Models
{
    public class EmploymentModel
    {
        public string pageTitle { get; set; }
        public Careers careers { get; set; } = new Careers();
        public Introduction introduction { get; set; } = new Introduction();
        public DegreeStatistics degreeStatistics { get; set; } = new DegreeStatistics();
        public Employers employers { get; set; } = new Employers();
        public CoopTable coopTable { get; set; } = new CoopTable();
        public EmploymentTable employmentTable { get; set; } = new EmploymentTable();

        public class Careers
        {
            public string title { get; set; }
            public List<string> careerNames { get; set; } = new List<string>();
        }

        public class Content
        {
            public string title { get; set; }
            public string description { get; set; }
        }

        public class CoopInformation
        {
            public string employer { get; set; }
            public string degree { get; set; }
            public string city { get; set; }
            public string term { get; set; }
        }

        public class CoopTable
        {
            public string title { get; set; }
            public List<CoopInformation> coopInformation { get; set; } = new List<CoopInformation>();
        }

        public class DegreeStatistics
        {
            public string title { get; set; }
            public List<Statistic> statistics { get; set; } = new List<Statistic>();
        }

        public class Employers
        {
            public string title { get; set; }
            public List<string> employerNames { get; set; } = new List<string>();
        }

        public class EmploymentTable
        {
            public string title { get; set; }
            public List<ProfessionalEmploymentInformation> professionalEmploymentInformation { get; set; } = new List<ProfessionalEmploymentInformation>();
        }

        public class Introduction
        {
            public string title { get; set; }
            public List<Content> content { get; set; } = new List<Content>();
        }

        public class ProfessionalEmploymentInformation
        {
            public string employer { get; set; }
            public string degree { get; set; }
            public string city { get; set; }
            public string title { get; set; }
            public string startDate { get; set; }
        }

        public class Root
        {
            public Introduction introduction { get; set; } = new Introduction();
            public DegreeStatistics degreeStatistics { get; set; } = new DegreeStatistics();
            public Employers employers { get; set; } = new Employers();
            public Careers careers { get; set; } = new Careers();
            public CoopTable coopTable { get; set; } = new CoopTable();
            public EmploymentTable employmentTable { get; set; } = new EmploymentTable();
        }

        public class Statistic
        {
            public string value { get; set; }
            public string description { get; set; }
        }
    }
}
