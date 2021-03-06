﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyApp.Domain
{
    public class Teacher
    {
        public int Id { get; set; }

        [MaxLength(100)]
        public string Name { get; set; }

        public ICollection<Course> Courses { get; set; }
    }
}
