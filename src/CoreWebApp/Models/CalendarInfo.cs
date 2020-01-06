using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWebApp.Models
{
    public class CalendarInfo
    {
        /// <summary>
        /// Currently selected date
        /// </summary>
        public DateTime SelectedDate { get; set; }

        /// <summary>
        /// Highlights the day of the SelectedDate variable
        /// </summary>
        public bool HighlightDay { get; set; }

        public CalendarInfo()
        {

        }

        public CalendarInfo(DateTime SelectedDate, bool HighlightDay )
        {
            this.SelectedDate = SelectedDate;
            this.HighlightDay = HighlightDay;
        }
    }
}
