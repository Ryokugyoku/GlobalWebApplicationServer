using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Globalization;
using System.Reflection;
using System.Resources;
using System.Text.Json;

namespace GlobalWebApplicationServer.Controllers
{
    /// <summary>
    ///    API用コントローラークラス
    /// </summary>
    [Route("/api/[controller]")]
    [ApiController]
    public class ResourceController : ControllerBase
    {
        /// <summary>
        ///     マルチ言語対応用コントローラークラス
        /// </summary>
        /// <returns>
        ///     ログインしているクライアントの言語に合わせて対象のリソースファイルを返している。
        /// </returns>
        [HttpGet]
        public IActionResult GetResourceValue()
        {
            var rm = new ResourceManager("GlobalWebApplicationServer.Properties.Resource.Lang", Assembly.GetExecutingAssembly());
            var resources = new Dictionary<string, string>();
            foreach (DictionaryEntry resource in rm.GetResourceSet(CultureInfo.CurrentCulture, true, true))
            {
                resources.Add(resource.Key.ToString(), resource.Value.ToString());
            }
            var json = JsonSerializer.Serialize(resources);
            return Ok(json);
        }
    }
}