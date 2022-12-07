const flexDirectionControllerBtns = document.querySelectorAll(
  ".flex-direction-controller"
)
const flexWrapControllerBtns = document.querySelectorAll(
  ".flex-wrap-controller"
)
const justifyContentControllerBtns = document.querySelectorAll(
  ".justify-content-controller"
)
const alignItemsControllerBtns = document.querySelectorAll(
  ".align-items-controller"
)
const flexWrapController = document.querySelector(".flex-wrap .example")
const flexDirectionController = document.querySelector(
  ".flex-direction .example"
)
const justifyContentController = document.querySelector(
  ".justify-content .example"
)
const alignItemsController = document.querySelector(".align-items .example")

flexDirectionControllerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeActive(btn)
    flexDirectionController.style.flexDirection = btn.dataset.action
  })
})
flexWrapControllerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeActive(btn)
    flexWrapController.style.flexWrap = btn.dataset.action
  })
})
justifyContentControllerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeActive(btn)
    justifyContentController.style.justifyContent = btn.dataset.action
  })
})
alignItemsControllerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    makeActive(btn)
    if (btn.dataset.action === "stretch") {
    }
    alignItemsController.style.alignItems = btn.dataset.action
  })
})

function makeActive(targetElement) {
  targetElement.parentElement.parentElement.parentElement
    .querySelectorAll(".active")
    .forEach((element) => element.classList.remove("active"))
  targetElement.classList.add("active")
}

const jcController = document.querySelectorAll(
  ".justify-content-and-align-items-controller .justify-content .btn"
)
const aiController = document.querySelectorAll(
  ".justify-content-and-align-items-controller .align-items .btn"
)

jcController.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement
      .querySelectorAll(".active")
      .forEach((element) => element.classList.remove("active"))
    btn.classList.add("active")
  })
})
aiController.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement
      .querySelectorAll(".active")
      .forEach((element) => element.classList.remove("active"))
    btn.classList.add("active")
  })
})

const jcAndaiControllerBtns = document.querySelectorAll(
  ".justify-content-and-align-items-controller .justify-content-align-items-controller"
)
const jcAndaiControllerExample = document.querySelector(
  ".justify-content-and-align-items .example"
)
jcAndaiControllerBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.target === "justify-content") {
      jcAndaiControllerExample.style.justifyContent = btn.dataset.action
    } else {
      jcAndaiControllerExample.style.alignItems = btn.dataset.action
    }
  })
})
