var cssdriveimagepalette = {

  lastxarray: [], //array containing last 8 selected colors
  lastxdivs: [],

  addEvent: function (targetarr, functionref, tasktype) {
    if (targetarr.length > 0) {
      var target = targetarr.shift()
      if (target.addEventListener)
        target.addEventListener(tasktype, functionref, false)
      else if (target.attachEvent)
        target.attachEvent('on' + tasktype, function () { return functionref.call(target, window.event) })
      this.addEvent(targetarr, functionref, tasktype)
    }
  },

  getElementsByClass: function (targetclass) {
    if (document.querySelectorAll)
      return document.querySelectorAll("." + targetclass)
    else {
      var classnameRE = new RegExp("(^|\\s+)" + targetclass + "($|\\s+)", "i") //regular expression to screen for classname
      var pieces = []
      var alltags = document.all ? document.all : document.getElementsByTagName("*")
      for (var i = 0; i < alltags.length; i++) {
        if (typeof alltags[i].className == "string" && alltags[i].className.search(classnameRE) != -1)
          pieces[pieces.length] = alltags[i]
      }
      return pieces
    }
  },

  showcolor: function (e, mode) {
    var e = e || window.event
    if (typeof e.target == "undefined")
      e.target = e.srcElement
    var selectedhex = e.target.getAttribute("title")
    if (selectedhex != null && selectedhex != "") { //if target element isn't a blank LI
      var targetelements = (mode == "current") ? ["colorDisplay", "colorHexDisplay"] : ["selectedColorDisplay", "selectedColorHexDisplay"]
      document.getElementById(targetelements[0]).style.background = selectedhex
      document.getElementById(targetelements[1]).innerHTML = "Hex: " + selectedhex
      if (mode == "selected" && e.target.parentNode.id != "lastx")
        this.savelastxcolor(selectedhex)
    }
  },

  savelastxcolor: function (selectedhex) {
    if (this.lastxarray.join().indexOf(selectedhex) == -1) { //check for existence of selectedhex first
      this.lastxarray = [selectedhex].concat(this.lastxarray).slice(0, 8)
      for (var i = 0; i < this.lastxarray.length; i++) {
        this.lastxdivs[i].style.backgroundColor = this.lastxarray[i]
        this.lastxdivs[i].title = this.lastxarray[i]
      }
      this.lastxdivs[0].style.borderColor = "red"
    }
  },

  clearlist: function () {
    this.lastxarray = []
    for (var i = 0; i < this.lastxdivs.length; i++) {
      this.lastxdivs[i].style.backgroundColor = ""
      this.lastxdivs[i].title = ""
    }
    this.lastxdivs[0].style.borderColor = "black"
  },

  resizeimage: function (imgid) {
    var img = document.getElementById(imgid)
    var dimensions = [Math.round(img.offsetWidth), Math.round(img.offsetHeight)]
    dimensions.sort(function (a, b) { return a - b }) //smallest to largest
    dimensions = [250 * dimensions[0] / dimensions[1], 250]
    if (img.offsetWidth > img.offsetHeight)
      dimensions.sort(function (a, b) { return b - a })
    img.style.width = dimensions[0] + "px"
    img.style.height = dimensions[1] + "px"
  },

  init: function () {
    var paletteuls = this.getElementsByClass("colorpalette")
    for (var i = 0; i < paletteuls.length; i++) {
      this.addEvent([paletteuls[i]], function (e) {
        cssdriveimagepalette.showcolor(e, "selected")
      }, "click")
      this.addEvent([paletteuls[i]], function (e) {
        cssdriveimagepalette.showcolor(e, "current")
      }, "mouseover")
    }
    var lastx = document.getElementById("lastx").getElementsByTagName("div")
    for (var i = 0; i < lastx.length; i++) { //catch lastx divs
      this.lastxdivs.push(lastx[i])
    }
    var loadedimg = document.getElementById("loadedimage")
    if (loadedimg) {
      if (loadedimg.complete) //account for IE not firing onload
        this.resizeimage("loadedimage")
      else {
        loadedimg.onload = function () {
          cssdriveimagepalette.resizeimage("loadedimage")
        }
      }
    }
  }

}