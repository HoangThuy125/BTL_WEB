using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BTL_WEB.Models.Entities;
using BTL_WEB.Models.Functions;
using BTL_WEB.Models;

namespace BTL_WEB.Controllers
{
    [JsonObject(IsReference = true)]
    public class SanPhamController : ApiController
    {
        [HttpGet]
        [Route("api/sanpham/getsanpham/{id}")]
        public string GetSanPham(int id)
        {
            Func_SanPham hamsanpham = new Func_SanPham();
            tbl_sanpham sanpham = hamsanpham.FindEntity(id);
            sanpham newsanpham = hamsanpham.getnewsanpham(sanpham);
            
            string json = JsonConvert.SerializeObject(newsanpham);
            return json;
        }
    }
}
