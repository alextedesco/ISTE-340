using System.Net.Http.Headers;
namespace Project3.Services
{
    public class dataRetrieval
    {
        /*
         * Task vs Thread
         * Task has async/await and can return a value
         * Task can do multiple things at once, thread can do one
         * can canel a task
         * Task is a higher level concept than a Thread
         */
        // use -- GetData ("about/")


        public async Task<string> GetData(string endpoint)
        {

            using (var client = new HttpClient ())
            {
                // set up the base
                client.BaseAddress = new Uri ("http://www.iste.rit.edu/api/");
                // clean it up
                client.DefaultRequestHeaders.Clear ();
                // set the type
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                try
                {
                    // Get ready to send off
                    HttpResponseMessage response = 
                        await client.GetAsync (endpoint, HttpCompletionOption.ResponseHeadersRead);
                    response.EnsureSuccessStatusCode();
                    // we can actually go get it
                    var data = await response.Content.ReadAsStringAsync();
                    // Data is just a big string...
                    return data;
                } catch (HttpRequestException hre) 
                {
                    var msg = hre.Message;
                    return "HttpRequest: " + msg;

                } catch (Exception ex)
                {
                    var msg = ex.Message;
                    return "Ex: " + msg;
                }

            }

        }

    }
}
