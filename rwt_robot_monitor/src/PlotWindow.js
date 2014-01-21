// PlotWindow.js

/**
 * @fileOverview a file to define DiagnosticsPlotWindow class.
 * @author Ryohei Ueda
 */

ROSLIB.DiagnosticsPlotWindow = function(spec) {
  var self = this;
  self.directory = spec.directory;
};

ROSLIB.DiagnosticsPlotWindow.prototype.initializePlotter = function() {
  var self = this;
  
  self.plotter.initializePlot(self.$html, {
    margin: {
      left: 20,
      top: 2,
      bottom: 20,
      right: 2
    },
    yaxis: {
      auto_scale: true,
      auto_scale_margin: 0.2,
      min: 0.1,
      tick: 3
    }
  });
  self.plotter.clearData();
};


ROSLIB.DiagnosticsPlotWindow.prototype.initialize = function(spec) {
  var self = this;
  self.index = spec.index;
  self.plotter = new ROSLIB.RWTPlot({
    max_data: 10,
    timestamp: true
  });
  
  // creating html
  self.$html = $('<div class="rwt-diagnostics-plot-window col-xs-2" id="rwt-plot-window-' + self.index + '"></div>');
  self.$html.data('index', self.index);
};

ROSLIB.DiagnosticsPlotWindow.prototype.getHTMLObject = function() {
  var self = this;
  return self.$html;
};

ROSLIB.DiagnosticsPlotWindow.prototype.update = function(data) {
  var self = this;
  var now = ROSLIB.Time.now();
  self.plotter.addData(now, [Number(data)]);
};

ROSLIB.DiagnosticsPlotWindow.prototype.remove = function() {
  
};
