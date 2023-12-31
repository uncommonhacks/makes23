// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll(".needs-validation");

var url =
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
          console.log("validated form");
          fn = $("input[name=fname]").val();
          ln = $("input[name=lname]").val();
          email = $("input[name=email]").val();
          yr = $("input[name=year]:checked").val();
          te = $("input[name=team]:checked").val();
          ws = $("input[name=workshop]:checked").val();
          ss = $("input[name=spaceship]:checked").val();
          console.log(fn, ln, yr, te, ws, ss);
          URL = `https://docs.google.com/forms/d/e/1FAIpQLScjpflyFahjeBqTC-g4_2i-LRtufjJeZ06XyFh5_Laewhoa5w/formResponse?&submit=Submit?usp=pp_url&entry.1985883040=${fn}&entry.999432858=${ln}&entry.589357266=${email}&entry.141446247=${yr}&entry.1297437449=${te}&entry.524434191=${ws}&entry.276209187=${ss}`;

          const iframe = document.getElementById("frame")
          //   var wdw = window.open(URL);
          iframe.setAttribute("src", URL);
          iframe.onload = () => {
            setTimeout(() => {
                window.location.href = "thankyou.html";
            }, 500);
          }

          const button = document.getElementById('submit-button')

          var newParagraph = document.createElement('p');
          newParagraph.textContent = "Loading...";

          // Replace the button with the new <p> element
          const parentNode = button.parentNode
          parentNode.replaceChild(newParagraph, button);

        } else {
          if (!document.getElementById("check-form")) {
            const button = document.getElementById('submit-button')

            var newParagraph = document.createElement('p');
            newParagraph.textContent = "Please check the information you provided!";
            newParagraph.className = "error"
            newParagraph.id = "check-form"

            // Replace the button with the new <p> element
            const parentNode = button.parentNode
            parentNode.appendChild(newParagraph, button);
          }
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
