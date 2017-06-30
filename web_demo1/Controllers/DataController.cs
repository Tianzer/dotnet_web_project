using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace web_demo1.Controllers
{
    public class DataController : Controller
    {
        //Fetch draft quote numbers
        public JsonResult getQuoteNumbers()
        {
            List<Quote> draftQuotes = new List<Quote>();
            using (Database1Entities dc = new Database1Entities())
            {
                draftQuotes = dc.Quotes.Where(a => a.QuoteStatus.Equals("Draft")).ToList();
            }

                return new JsonResult { Data = draftQuotes, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}