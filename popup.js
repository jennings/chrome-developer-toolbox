document.addEventListener('DOMContentLoaded', function () {

  document.querySelector('#toggle-outlines').addEventListener('click', function toggleOutlines() {
    chrome.tabs.executeScript({
      code: `
          window.DeveloperToolbar = window.DeveloperToolbar || {}
          if (window.DeveloperToolbar.outlines) {
              window.DeveloperToolbar.outlines.remove()
              window.DeveloperToolbar.outlines = null
          } else {
              const style = document.createElement('style')
              style.innerText = "* { outline: solid 1px red; }"
              document.body.appendChild(style)
              window.DeveloperToolbar.outlines = style
          }
      `
    })
  })

  document.querySelector('#yolo-execute').addEventListener('click', function toggleOutlines() {
    const code = document.querySelector('#yolo-execute-code').value
    chrome.tabs.executeScript({ code })
  })

})
