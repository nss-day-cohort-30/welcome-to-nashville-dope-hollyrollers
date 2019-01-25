let meetUpsButton = document.querySelector("#searchEventBTN")

meetUpsButton.addEventListener("click", () => {
  let formDateValue = document.querySelector("#eventOptions").value
  let splitDate = formDateValue.split(",")
  console.log(splitDate)
  getDate(splitDate)

})
