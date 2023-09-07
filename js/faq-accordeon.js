function toggleAccordion(id) {
        var button = document.querySelector(`button[data-id="${id}"]`);
        var accordion = document.querySelector(`#accordion${id}`);
        accordion.classList.toggle("active");
        button.classList.toggle("answer-button");
        button.classList.toggle("collapse-button");
        if (button.innerHTML === "Ответ") {
          button.innerHTML = "Свернуть";
        } else {
          button.innerHTML = "Ответ";
        }
      }