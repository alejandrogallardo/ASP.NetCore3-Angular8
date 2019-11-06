using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using Microsoft.EntityFrameworkCore;
//using crud.Models;
//using crud.Models.Request;

namespace crud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
	public class PersonasController : ControllerBase
	{
		
		[HttpGet]
		public IEnumerable<Models.Personas> get()
		{
		using (Models.pruebacuatroContext db = new Models.pruebacuatroContext())
			{
				return db.Personas.ToList();
			}

		}

		// GET: api/Persona/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Models.Personas>> GetPersonaOneRequest(int id)
		{
			using (Models.pruebacuatroContext db = new Models.pruebacuatroContext())
			{
				var persona = await db.Personas.FindAsync(id);

				if (persona == null)
				{
					return NotFound();
				}

				return persona;
			}
				
		}

		[HttpPost]
		public ActionResult Post([FromBody] Models.Request.PersonaRequest model)
		{
			using (Models.pruebacuatroContext db = new Models.pruebacuatroContext())
			{
				Models.Personas oPersona = new Models.Personas();
				oPersona.Nombre = model.Nombre;
				oPersona.Apellido = model.Apellido;
				oPersona.Correo = model.Correo;
				oPersona.Bio = model.Bio;
				db.Personas.Add(oPersona);
				db.SaveChanges();
			}
			return Ok();
		}

		// PUT: api/Personas/5
		[HttpPut("{id}")]
		public async Task<IActionResult> PutPersonas(int id, Models.Personas personaOneRequest)
		{
			using (Models.pruebacuatroContext db = new Models.pruebacuatroContext())
			{
				if (id != personaOneRequest.Id)
				{
					return BadRequest();
				}

				db.Entry(personaOneRequest).State = EntityState.Modified;

				try
				{
					await db.SaveChangesAsync();
				}
				catch (DbUpdateConcurrencyException)
				{
					if (!PersonaExists(id))
					{
						return NotFound();
					}
					else
					{
						throw;
					}
				}

				return NoContent();
			}
		}

		// DELETE: api/Persona/5
		[HttpDelete("{id}")]
		public async Task<ActionResult<Models.Personas>> DeletePersona(int id)
		{
			using (Models.pruebacuatroContext db = new Models.pruebacuatroContext())
			{
				var persona = await db.Personas.FindAsync(id);
				if (persona == null)
				{
					return NotFound();
				}
				db.Personas.Remove(persona);
				await db.SaveChangesAsync();

				return persona;
			}
		}

		private bool PersonaExists(int id)
		{
			using (Models.pruebacuatroContext db = new Models.pruebacuatroContext())
			{
				return db.Personas.Any(e => e.Id == id);
			}
		}
	}
}