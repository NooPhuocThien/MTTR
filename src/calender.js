// document.addEventListener('DOMContentLoaded', function() {
function update_calender(date_data, shift_data){
    const monthYear = document.getElementById('monthYear');
    const daysContainer = document.getElementById('days-container');
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');
  
    // Arrays for dates and corresponding information
    const arr1 = date_data
    const arr2 = shift_data

    // Convert arrays to Date objects
    const highlightedDates1 = arr1.map(date => new Date(date));
    // const highlightedDates2 = arr3.map(date => new Date(date));
  
    function generateCalendar(month, year) {
      const firstDay = new Date(year, month, 1).getDay();
      const totalDays = new Date(year, month + 1, 0).getDate();
  
      // Adjust for Monday start
      const startDay = (firstDay === 0) ? 6 : firstDay - 1;
  
      daysContainer.innerHTML = '';
  
      // Add empty cells before the first day
      for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('day');
        daysContainer.appendChild(emptyCell);
      }
  
      // Add days of the month
      for (let i = 1; i <= totalDays; i++) {
          const dayCell = document.createElement('div');
          dayCell.classList.add('day');
          dayCell.textContent = i;
  
        // Check if the date should be highlighted
          const currentDate = new Date(year, month, i);
          const isHighlighted1 = highlightedDates1.some(date => 
          date.getFullYear() === currentDate.getFullYear() &&
          date.getMonth() === currentDate.getMonth() &&
          date.getDate() === currentDate.getDate()
        );
  
        // const isHighlighted2 = highlightedDates2.some(date => 
        //   date.getFullYear() === currentDate.getFullYear() &&
        //   date.getMonth() === currentDate.getMonth() &&
        //   date.getDate() === currentDate.getDate()
        // );
  
        if (isHighlighted1) {
          const dotContainer = document.createElement('div');
          dotContainer.classList.add('dot-container');
  
          if (isHighlighted1) {
            const greenDot = document.createElement('div');
            greenDot.classList.add('dot', 'green-dot');
            const text_of_shift = document.createElement('div');
            text_of_shift.classList.add('textcontent');
            // Find the index of the highlighted date in arr1
            const index1 = highlightedDates1.findIndex(date => 
              date.getFullYear() === currentDate.getFullYear() &&
              date.getMonth() === currentDate.getMonth() &&
              date.getDate() === currentDate.getDate()
            );
            const text_shift_display = document.createElement('div')
            text_shift_display.classList.add('dot','text_shift_display')
            text_shift_display.textContent = arr2[index1] || ''
            text_shift_display.style.display = 'flex'
            greenDot.appendChild(text_shift_display);
            const edit_button = document.createElement('button');
            edit_button.classList.add('dot','edit_button_class');
            edit_button.style.display = 'none'
            edit_button.textContent = 'Remove'
            const image_edit = document.createElement("img");
            image_edit.classList.add('icon_edit_shift')
            image_edit.src = 'img/thungrac.svg'; 
            edit_button.addEventListener('click', () => {
              const date_time_information = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
              detele_date_time = date_time_information
              delete_object()
            });
            greenDot.appendChild(text_of_shift);
            dotContainer.appendChild(greenDot);
            edit_button.appendChild(image_edit)
            dotContainer.appendChild(edit_button)
            dotContainer.addEventListener('mouseover',() =>{
              edit_button.style.display = 'flex'
             })
             dotContainer.addEventListener('mouseout',() =>{
              edit_button.style.display = 'none'
              })




            // text_of_shift.textContent = arr2[index1] || '';
     
          }
          
          // if (isHighlighted2) {
          //   const redDot = document.createElement('div');
          //   redDot.classList.add('dot', 'red-dot');
          //   const index2 = highlightedDates2.findIndex(date => 
          //   date.getFullYear() === currentDate.getFullYear() &&
          //   date.getMonth() === currentDate.getMonth() &&
          //   date.getDate() === currentDate.getDate()
          //   );
          //   const text_issue_display = document.createElement('div')
          //   text_issue_display.classList.add('dot','text_issue_display')
          //   text_issue_display.textContent = arr4[index2] || ''
          //   text_issue_display.style.display = 'none'
          //   redDot.appendChild(text_issue_display);
  
          //   redDot.addEventListener('mouseover',() =>{
          //    text_issue_display.style.display = 'flex'
          //   })
          //   redDot.addEventListener('mouseout',() =>{
          //     text_issue_display.style.display = 'none'
          //    })
  
          //   dotContainer.appendChild(redDot);
          // }
          dayCell.appendChild(dotContainer);
        } else {
          const button_add = document.createElement("div")
          button_add.classList.add('button_input_shift')
          button_add.style.display = 'none';
          const shift = document.createElement('button');
          shift.classList.add('shift_display_button');
          shift.textContent = 'Input Shift';
          const image = document.createElement("img");
          image.classList.add('icon_add_shift')
          image.src = 'img/addcom.svg'; 
          button_add.appendChild(shift)
          shift.appendChild(image);
          shift.addEventListener('click', () => {
            const date_time_information = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
            shift_input_information_box(date_time_information)
          });
  
          dayCell.appendChild(button_add);
  
          dayCell.addEventListener('mouseover', () => {
            button_add.style.display = 'flex';
          });
          dayCell.addEventListener('mouseout', () => {
            button_add.style.display = 'none';
          });
        }
        daysContainer.appendChild(dayCell);
      }
  
      // Add empty cells after the last day
      const totalCells = Math.ceil((startDay + totalDays) / 7) * 7;
      for (let i = startDay + totalDays; i < totalCells; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('day');
        daysContainer.appendChild(emptyCell);
      }
  
      monthYear.textContent = `${month + 1}/${year}`;
    }
  
    function updateCalendar() {
      const selectedMonth = parseInt(monthSelect.value);
      const selectedYear = parseInt(yearSelect.value);

      var msg = {
        topic: "calender_select_time",
        payload: {
          selectedMonth,
          selectedYear
        }
    };
    uibuilder.send(msg)
      generateCalendar(selectedMonth, selectedYear);
      // call_calender()
    }
  
    // Add event listeners to update calendar when the selection changes
    monthSelect.addEventListener('change', updateCalendar);
    yearSelect.addEventListener('change', updateCalendar);
  
    // Initialize calendar with the current month and year
    const now = new Date();
    monthSelect.value = now.getMonth();
    yearSelect.value = now.getFullYear();
    generateCalendar(now.getMonth(), now.getFullYear());
  }
// );
  