using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Mvc;

namespace capstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PeopleController : ControllerBase
    {
        private ApplicationDbContext _context;
        public PeopleController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<People> Get()
        {
            return _context.People.ToList();
        } 

        [HttpPost]
        public People Post([FromBody]People person)
        {
            _context.People.Add(person);
            _context.SaveChanges();
            return person;
                
        }




    }
}
