using System.Web.Mvc;

namespace PubSubApp.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult NavigateTopMenu(string selectedItem)
        {
            if (selectedItem == "3")
                return Json(new
                                {
                                    ViewModelName = "dashBoard",
                                    Model = new[]{ "1111", "22222", "3333"}
                                }, JsonRequestBehavior.AllowGet);
            return Json(new
                            {
                                ViewModelName = "catalogLayout",
                                Model = ""
                            }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetDataLetersTemplates()
        {
            return Json("hello", JsonRequestBehavior.AllowGet);
        }

    }
}
