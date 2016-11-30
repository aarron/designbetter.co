(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
  width: 510,
  height: 600,
  fps: 24,
  color: "#FFFFFF",
  opacity: 1.00,
  manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.Tween3 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#000000").ss(2).p("AAYBKIgvAAIAAiTIAvAAg");
  this.shape.setTransform(-52.4,-63.8);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#EF5B30").s().p("AgXBKIAAiTIAvAAIAACTg");
  this.shape_1.setTransform(-52.4,-63.8);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f().s("#000000").ss(2,1).p("ABBgdIiBA7");
  this.shape_2.setTransform(-2.7,-30.6);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f().s("#000000").ss(2,1).p("ABmAFQgRgFgjgCQhCgGhUAM");
  this.shape_3.setTransform(23.7,21.6);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f().s("#000000").ss(2,1).p("ABCAGQgSgFgagCQgygHglAF");
  this.shape_4.setTransform(29.2,16.8);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f().s("#000000").ss(2).p("AFtIuIhdgUIg2g5QjqiPiZkQQh4jVhGkuQgDgPAHgPQAGgOAPgHQBVgqAegMQAQgHAQAHQARAGAHAQIBmDbQAQAjAEANQAEAKAGAWQAGATAGAMQAJASAVAaQB2CFAuAsQAIADAKAIQAPAMABABQAJAGAaAJQBdAjAYAS");
  this.shape_5.setTransform(18.3,15.5);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#1073B9").s().p("AEOIaIg2g5QjqiPiZkQQh4jVhGkuQgDgPAHgPQAGgOAPgHQBVgqAegMQAQgHAQAHQARAGAHAQIBmDbQAQAjAEANIAKAgQAGATAGAMQAJASAVAaQB2CFAuAsQAIADAKAIIAQANQAJAGAaAJQBdAjAYASIAEG/g");
  this.shape_6.setTransform(18.5,15.5);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f().s("#000000").ss(2,1).p("AAagRQgEAGgIAHQgQAMgYAK");
  this.shape_7.setTransform(-10.1,-56.7);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f().s("#000000").ss(2,1).p("AAvguQgrAdggANIgQAMQgJATAhAV");
  this.shape_8.setTransform(-8.1,-44.9);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f().s("#000000").ss(2,0,1).p("ADxBSQgpAmhAARIg3AJQgSgugGgbQgdgCghgNQgegKgggSQghgRgTgTQgTgUACgOQADgNARgCQARgCASAJQApAWAiAGQAdAFAJgJQAOgPgJgSQgJgTgdAAQitgFgUgBQgRgBgMgKQgOgKAAgRQAAgQAcgFQALgCAdgBQBAgCBeADQBfADARAGQA0AUAoBBQAjA6ANBJg");
  this.shape_9.setTransform(-26.3,-52.9);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#E1EC3D").s().p("AA3BJQgcgCgigNQgegKgggSQgggRgTgTQgUgUADgOQACgNARgCQARgCASAJQApAWAiAGQAeAFAIgJQAOgPgJgSQgJgTgcAAIjCgGQgRgBgMgKQgNgKAAgRQAAgQAcgFQAKgCAdgBQBAgCBfADQBfADAQAGQA0AUAoBBQAkA6ANBJQgqAmhAARIg3AJQgSgugGgbg");
  this.shape_10.setTransform(-26.1,-52.9);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f().s("#000000").ss(2,1).p("ABVADIiKA/Igag/IA3gHQA+gRApgmQAGAjAAAbg");
  this.shape_11.setTransform(-10.1,-38.6);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#D8AA7B").s().p("AhSAAIA4gHQA9gRAqgmQAGAigBAcIiJA/g");
  this.shape_12.setTransform(-9.9,-38.2);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f().s("#000000").ss(2).p("AglAkQgCAQgJAIQgHAGgJAAQgJABgFgHQgIgKgCgWQgDgwAQgtICkABIAABAg");
  this.shape_13.setTransform(-30.6,-54.2);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#E1EC3D").s().p("AhOA8QgIgKgCgWQgDgwAQgtICkABIAABAIh+AkQgCAQgJAIQgHAGgJAAIgBAAQgJAAgEgGg");
  this.shape_14.setTransform(-30.6,-54.2);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f().s("#000000").ss(2).p("AgXAQQAEAIAIAFQAHAFAHAAQAIABAFgGQAEgDAEgKIAAgPIgvgbg");
  this.shape_15.setTransform(-26.8,-46.6);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#E1EC3D").s().p("AADAfQgHAAgHgFQgIgFgEgIIAAgrIAvAdIAAAOQgEAKgEADQgFAFgHAAIgBAAg");
  this.shape_16.setTransform(-26.8,-46.2);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f().s("#000000").ss(2).p("AAXAEQABAhgKAHQgHAFgIgEQgKgEgGgIQgEgHgBgPQAAgPgBgGIAAgjIAuAAg");
  this.shape_17.setTransform(-32.3,-48.6);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#E1EC3D").s().p("AgBAtQgKgEgGgIQgEgHgBgPIgBgVIAAgjIAuAAIAAAxQABAhgKAHQgEACgFAAQgEAAgCgBg");
  this.shape_18.setTransform(-32.3,-48.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-72.3,111.8,144.6);


(lib.Tween2 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#000000").ss(2,1).p("AiGg9QglgigWgQQgjgZgigJQgEgBgzgHQg7gHhNgaQhGgXg9gdQgkAOgUALQgdARgQAWQgUAcgDAqQgCAcAGAwQBxBeCRBGQCYBKCJAWQBZAOBFgLQApgHAxgSQAegMA5gZQC4hSBbgvQCWhNBqhT");
  this.shape.setTransform(14,14);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f().s("#000000").ss(2,1).p("ADGjPQg0AdgyA4QgfAig1BHIhBBZQgnA1gZAaQgrAuglAL");
  this.shape_1.setTransform(28.2,-17.1);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f().s("#000000").ss(2,1).p("AAmBKQgbhQgwhD");
  this.shape_2.setTransform(-28.4,21.7);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f().s("#000000").ss(2,1).p("ABzADQhwgGh1AB");
  this.shape_3.setTransform(7.9,3.8);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f().s("#000000").ss(2,1).p("ABfAAQAAAngdAcQgbAcgnAAQgmAAgbgcQgdgcAAgnQAAgmAdgcQAbgcAmAAQAnAAAbAcQAdAcAAAmg");
  this.shape_4.setTransform(57.3,-10.1);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AhBBDQgcgcAAgnQAAgmAcgcQAbgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgbgcg");
  this.shape_5.setTransform(57.3,-10.1);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#1073B9").s().p("AidFzQiJgViYhKQiRhHhxhfQgGgxACgcQADgoAUgcQAQgWAdgRQAUgLAkgNQA9AdBGAXQBNAZA7AIIA3AIIAxAKQAOAFAZAYQBNgBAqAEQAlgMApgrQAZgbAng1IBDhaQA1hIAfgiQAyg3A0geIFxGRQhqBTiWBOQhbAwi4BSQg5AZgeALQgxASgpAHQgdAGgjAAQgsAAgygJg");
  this.shape_6.setTransform(14,0);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f().s("#000000").ss(2,1).p("AAvgtIgjAVQgmAcgUAr");
  this.shape_7.setTransform(-66.3,-15.3);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f().s("#000000").ss(2,1).p("AA0g6IgjAKQgnAVgZAtQgKASAOANQAOANAYgE");
  this.shape_8.setTransform(-55.5,-6.3);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f().s("#000000").ss(2,1).p("Ahxg4QANAYAfAWQAdATAcAGQBRATAtAX");
  this.shape_9.setTransform(-68.4,2.2);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f().s("#000000").ss(2,1).p("ADBABQgZgKgwgkQgzgmgVgMQgXgMgGgCQgLgFgRgEQgcgEgOAAQgXABgQAJQgDACgQAMQgLAIgJADQgKACgEACQgIACgDAFQgCAEACAIQABAJgBAEQgBAJgPAJQgQAKgDAIQgCAHADAIQADANAAAEQAAAJgHASQgHAjAzAkQAKAHAJABQAMABAEgI");
  this.shape_10.setTransform(-65.5,-10);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#E1EC3D").s().p("AgqBtQgWgGgagNIgVgNQgEAKgNADQgMADgIgGQgzgjAHgkQAHgQAAgIIgDgRQgDgLACgGQADgIAQgKQAPgKABgJIAAgMQgCgIACgEQADgFAIgDIAOgEQAJgCALgJIATgOQAQgJAXAAQAOAAAcAEQARADALAFIAdAPQAVALAzAnQAwAkAZALIhtCvQgtgWhRgTg");
  this.shape_11.setTransform(-65.5,-7.2);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f().s("#000000").ss(2).p("AA4AAQAAAXgQARQgRARgXAAQgWAAgRgRQgQgRAAgXQAAgWAQgRQARgRAWAAQAXAAARARQAQARAAAWg");
  this.shape_12.setTransform(-69.8,2.2);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#EF5B30").s().p("AgnAoQgQgRAAgXQAAgWAQgRQARgRAWAAQAXAAARARQAQARAAAWQAAAXgQARQgRARgXAAQgWAAgRgRg");
  this.shape_13.setTransform(-69.8,2.2);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-39,175.1,79);


(lib.Tween1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#000000").ss(2,1).p("AiGg9QglgigWgQQgjgZgigJQgEgBgzgHQg7gHhNgaQhGgXg9gdQgkAOgUALQgdARgQAWQgUAcgDAqQgCAcAGAwQBxBeCRBGQCYBKCJAWQBZAOBFgLQApgHAxgSQAegMA5gZQC4hSBbgvQCWhNBqhT");
  this.shape.setTransform(14,14);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f().s("#000000").ss(2,1).p("ADGjPQg0AdgyA4QgfAig1BHIhBBZQgnA1gZAaQgrAuglAL");
  this.shape_1.setTransform(28.2,-17.1);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f().s("#000000").ss(2,1).p("AAmBKQgbhQgwhD");
  this.shape_2.setTransform(-28.4,21.7);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f().s("#000000").ss(2,1).p("ABzADQhwgGh1AB");
  this.shape_3.setTransform(7.9,3.8);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f().s("#000000").ss(2,1).p("ABfAAQAAAngdAcQgbAcgnAAQgmAAgbgcQgdgcAAgnQAAgmAdgcQAbgcAmAAQAnAAAbAcQAdAcAAAmg");
  this.shape_4.setTransform(57.3,-10.1);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AhBBDQgcgcAAgnQAAgmAcgcQAbgcAmAAQAnAAAcAcQAcAcAAAmQAAAngcAcQgcAcgnAAQgmAAgbgcg");
  this.shape_5.setTransform(57.3,-10.1);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#1073B9").s().p("AidFzQiJgViYhKQiRhHhxhfQgGgxACgcQADgoAUgcQAQgWAdgRQAUgLAkgNQA9AdBGAXQBNAZA7AIIA3AIIAxAKQAOAFAZAYQBNgBAqAEQAlgMApgrQAZgbAng1IBDhaQA1hIAfgiQAyg3A0geIFxGRQhqBTiWBOQhbAwi4BSQg5AZgeALQgxASgpAHQgdAGgjAAQgsAAgygJg");
  this.shape_6.setTransform(14,0);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f().s("#000000").ss(2,1).p("AAvgtIgjAVQgmAcgUAr");
  this.shape_7.setTransform(-66.3,-15.3);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f().s("#000000").ss(2,1).p("AA0g6IgjAKQgnAVgZAtQgKASAOANQAOANAYgE");
  this.shape_8.setTransform(-55.5,-6.3);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f().s("#000000").ss(2,1).p("Ahxg4QANAYAfAWQAdATAcAGQBRATAtAX");
  this.shape_9.setTransform(-68.4,2.2);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f().s("#000000").ss(2,1).p("ADBABQgZgKgwgkQgzgmgVgMQgXgMgGgCQgLgFgRgEQgcgEgOAAQgXABgQAJQgDACgQAMQgLAIgJADQgKACgEACQgIACgDAFQgCAEACAIQABAJgBAEQgBAJgPAJQgQAKgDAIQgCAHADAIQADANAAAEQAAAJgHASQgHAjAzAkQAKAHAJABQAMABAEgI");
  this.shape_10.setTransform(-65.5,-10);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#E1EC3D").s().p("AgqBtQgWgGgagNIgVgNQgEAKgNADQgMADgIgGQgzgjAHgkQAHgQAAgIIgDgRQgDgLACgGQADgIAQgKQAPgKABgJIAAgMQgCgIACgEQADgFAIgDIAOgEQAJgCALgJIATgOQAQgJAXAAQAOAAAcAEQARADALAFIAdAPQAVALAzAnQAwAkAZALIhtCvQgtgWhRgTg");
  this.shape_11.setTransform(-65.5,-7.2);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f().s("#000000").ss(2).p("AA4AAQAAAXgQARQgRARgXAAQgWAAgRgRQgQgRAAgXQAAgWAQgRQARgRAWAAQAXAAARARQAQARAAAWg");
  this.shape_12.setTransform(-69.8,2.2);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#EF5B30").s().p("AgnAoQgQgRAAgXQAAgWAQgRQARgRAWAAQAXAAARARQAQARAAAWQAAAXgQARQgRARgXAAQgWAAgRgRg");
  this.shape_13.setTransform(-69.8,2.2);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.1,-39,175.1,79);


(lib.Lever = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#000000").ss(2).p("ABWAAQAAAjgZAZQgaAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgaQAZgZAiAAQAjAAAaAZQAZAaAAAig");
  this.shape.setTransform(8.6,68);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#E6E6E6").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAaAZAAAiQAAAjgaAZQgZAagjAAQgiAAgZgag");
  this.shape_1.setTransform(8.6,68);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f().s("#000000").ss(2).p("AgEFPIgMqcIAVgBIANKcg");
  this.shape_2.setTransform(8.6,33.5);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.2,78.6);


(lib.hoverTarget_mc = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#333333").ss(1,1,1).p("Egn0gu7MBPpAAAMAAABd3MhPpAAAg");
  this.shape.setTransform(255,300.5);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#A6B0A8").s().p("Egn0Au8MAAAhd3MBPpAAAMAAABd3g");
  this.shape_1.setTransform(255,300.5);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,512,603);


(lib.Path_12 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AghgjQgFgMgGAAIBZAAIhJBfQAGg7gLgYg");
  this.shape.setTransform(4.6,4.8);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,9.1,9.7);


(lib.Path_11 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#FFFFFF").s().p("AgUA5IgPggQgHgOgFAAQgLAAgIATQgEAKgCAKQgCATgMAPQgYAegtgSQgvgUgHhJQgCgZAFgYQAEgXAHgDQA/geBWAAQBJAABQAIQBdAJAEANQAJAigEA7QgCAegDAYQgUAHgdAHQg6AOgwAAQguAAgXgug");
  this.shape.setTransform(21.1,10.3);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.2,20.7);


// stage content:
(lib.Factory = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  this.invPlaying = false;

  // timeline functions:
  this.frame_0 = function() {
    if (this.invPlaying === false) {
      this.stop();
    } else {
      this.play();
    }
  }

  // actions tween:
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(75));

  // Actions
  this.hoverTarget_mc = new lib.hoverTarget_mc();
  this.hoverTarget_mc.parent = this;
  this.hoverTarget_mc.setTransform(255.1,299.5,1,1,0,0,0,255,300.4);
  this.hoverTarget_mc.alpha = 0.012;

  this.timeline.addTween(cjs.Tween.get(this.hoverTarget_mc).wait(75));

  // Blinky Lines
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#E1EC3D").s().p("AD0C3IC+hAIAEAMIi/A8gAm1CEIAEgNIC9BBIgCAHgAl1ADIAHgJICgB2IgEAGgADPBwICfh2IAIAIIijB0gAkShiIALgIIB0CiIgHAEgACUA4IB0iiIAKAIIh4CegABMAUIA7i9IAMAEIhAC7gAiTilIANgEIA7C9IgHACgAgDAIIgCjFIAFgBIAGABIgDDFg");
  this.shape.setTransform(172.7,19.1);

  this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},10).wait(5).to({_off:false},0).to({_off:true},10).wait(5).to({_off:false},0).to({_off:true},9).wait(5).to({_off:false},0).to({_off:true},10).wait(5).to({_off:false},0).to({_off:true},10).wait(6));

  // Left Arm
  this.instance = new lib.Tween1("synched",0);
  this.instance.parent = this;
  this.instance.setTransform(304.6,246.1);

  this.instance_1 = new lib.Tween2("synched",0);
  this.instance_1.parent = this;
  this.instance_1.setTransform(311.4,246.1);
  this.instance_1._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({startPosition:0},0).to({_off:true,x:311.4},10).wait(26).to({_off:false,x:304.6},10).wait(15));
  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},10).wait(26).to({startPosition:0},0).to({_off:true,x:304.6},10).wait(15));

  // Main Body
  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f().s("#000000").ss(2,1).p("AAOAAQAAAFgEAFQgFAEgFAAQgEAAgFgEQgEgFAAgFQAAgFAEgEQAFgEAEAAQAFAAAFAEQAEAEAAAFg");
  this.shape_1.setTransform(338.7,317.6);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f().s("#000000").ss(2,1).p("AFTgIQjEBBkDgnQhSgMhOgTIg+gT");
  this.shape_2.setTransform(361.4,330.9);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f().s("#000000").ss(2,1).p("AlOghIAyASQBBATBLAMQDsApD0g2");
  this.shape_3.setTransform(361.8,338.4);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f().s("#000000").ss(2,1).p("AhAhvIgDAiQgDAqAIAjQAXBtBsAD");
  this.shape_4.setTransform(382.2,370.3);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f().s("#000000").ss(2,1).p("AAYgnIgOAcQgPAdgSAW");
  this.shape_5.setTransform(385.3,513.1);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f().s("#000000").ss(2,1).p("AhAggQBcA/AlAD");
  this.shape_6.setTransform(385.8,580.1);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f().s("#000000").ss(2,1).p("AA5hBIgSAvQgYAxgWAVQgaAVgPgLQgNgLAHgNQACgFALgNQAJgNAEgH");
  this.shape_7.setTransform(383.5,552.3);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f().s("#000000").ss(2,1).p("AgQgnIAHAeQAJAgARAR");
  this.shape_8.setTransform(334.2,551.5);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f().s("#000000").ss(2,1).p("AAiQEQgEgfgCgoQgGhPAIgrQAIgrgGhUIgGhLQgfkTgPh4QgJhLAEjDIAFi2QAEhpADhsQAHjagBgTQgBgigalJ");
  this.shape_9.setTransform(350,466.3);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f().s("#000000").ss(2,1).p("AAAggIAABB");
  this.shape_10.setTransform(390.2,335.7);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f().s("#000000").ss(2,1).p("AgBglIAEBL");
  this.shape_11.setTransform(385.3,336.8);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f().s("#000000").ss(2,1).p("AAAggIAABB");
  this.shape_12.setTransform(380.4,337.3);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f().s("#000000").ss(2,1).p("AAAgdQgBAdACAe");
  this.shape_13.setTransform(375.8,337.5);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f().s("#000000").ss(2,1).p("AAAgdIAAA7");
  this.shape_14.setTransform(371.4,338);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f().s("#000000").ss(2,1).p("AAAgdIAAA7");
  this.shape_15.setTransform(366.3,338);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f().s("#000000").ss(2,1).p("AAAghIAABD");
  this.shape_16.setTransform(360.4,338.2);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f().s("#000000").ss(2,1).p("AABghIgBBD");
  this.shape_17.setTransform(356.6,337.9);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f().s("#000000").ss(2,1).p("AAAgdQgBAuABAN");
  this.shape_18.setTransform(351.6,337.5);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f().s("#000000").ss(2,1).p("AAAggIAABB");
  this.shape_19.setTransform(346.5,335.7);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f().s("#000000").ss(2,1).p("AAAgmIAABN");
  this.shape_20.setTransform(340.4,335);

  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f().s("#000000").ss(2,1).p("AACgjQgBAKgBAZQAAAagCAK");
  this.shape_21.setTransform(335,333.5);

  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f().s("#000000").ss(2,1).p("AABgjQACARgBAVQgCAXgCAK");
  this.shape_22.setTransform(330.4,332.5);

  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f().s("#000000").ss(2,1).p("AiAAVQBXAHAwgGQBMgKAugk");
  this.shape_23.setTransform(373.6,324.6);

  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#000000").s().p("AghAVQgKgBAAgKQAAgKAKABQAgACAbgUQAHgGAHAHQAHAHgHAGQgQALgTAHQgQAGgQAAIgGAAg");
  this.shape_24.setTransform(343,176.3);

  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f().s("#000000").ss(2,1).p("AhgAIIBBgMQBLgKA1AU");
  this.shape_25.setTransform(349,95.8);

  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#FFFFFF").s().p("AA9APIgBAAIg8gPQgSgDgagCIgUgCQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAqgDQAMAAALABIAtALIAOAFIAFADQAEADgCAEQgBAAAAABQgBAAAAABQAAAAgBAAQAAAAgBAAIgCAAg");
  this.shape_26.setTransform(346.4,93.9);

  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#FFFFFF").s().p("AAAAQIgBgDIAAAAIgBgFIAAgIIgBgFIAAgBQgFABgBgFQAAgFAFgBIADAAQABAAADACQACACACAEQACAEAAADQABADgBAHIgCAFQgCADgDAAIgCgBg");
  this.shape_27.setTransform(360.9,121.5);

  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#FFFFFF").s().p("AhoAGQgGAAABgGQAAgCAFAAIDRgEQAFAAAAAFQAAACgEABIghADIgiACg");
  this.shape_28.setTransform(334.3,125.3);

  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#FFFFFF").s().p("AArA4IgEgFIglg1QgEgIgLgLQgKgKgHgFIgNgJIgGgDQgEgDADgEQABgEAEABIAAABIAHACQAKADAGAEQAKAGAKAJQAIAKAJALIAQAVIAVArQACAFgFABIgCABQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBg");
  this.shape_29.setTransform(364.4,106.8);

  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("AAEBaIgHiz");
  this.shape_30.setTransform(338.1,195.6);

  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f().s("#000000").ss(2).p("AggAKIgBgfQgBgFAEgCQAEgDAEABIA3ATIACA0");
  this.shape_31.setTransform(372.9,129);

  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f().s("#000000").ss(2,1).p("AA8AcQAEgIgOgLQgagUhUgQ");
  this.shape_32.setTransform(361.2,126.2);

  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f().s("#000000").ss(2).p("ADjArIgCgwQAAgGgEgEQgEgFgGgBIg5gLQgFgBgGACQgFADgDAFIgUAnQiRgXh0ALQglAEgdAIIgVAG");
  this.shape_33.setTransform(340.5,121);

  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f().s("#000000").ss(2).p("AFVDqQgBgOAAgDQgBgjhPgZQgxgQg3gGQgegEhzADQgbABhQAAQhMgBghACQh/AEgGAMQgLgGgCgCQgEgEAFgEQAPgNBIgiQgIg3ASg8QAjh7CBgiIAMgZQAPgYASgBQAsgBAcAFQBAALA8AoQBYA8AfAtQAyBJAGCGIARAGIACA1IAEADQAEAEAAADQAAARgNAOg");
  this.shape_34.setTransform(343.5,114.4);

  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#1073B9").s().p("AFUDZQgBgjhPgZQgxgQg3gGQgegEhzADIhrABQhMgBghACQh/AEgGAMQgLgGgCgCQgEgEAFgEQAPgNBIgiQgIg3ASg8QAjh7CBgiIAMgZQAPgYASgBQAsgBAcAFQBAALA8AoQBYA8AfAtQAyBJAGCGIARAGIACA1IAEADQAEAEAAADQAAARgNAOIgBgRg");
  this.shape_35.setTransform(343.5,114.4);

  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f().s("#000000").ss(2).p("AgYAyQgEgaAFgYQAJg1ApAAIAABrg");
  this.shape_36.setTransform(315.6,120);

  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#1073B9").s().p("AgYAyQgEgaAFgYQAJg1ApAAIAABrg");
  this.shape_37.setTransform(315.6,120);

  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f().s("#000000").ss(2,1).p("AApgeQgcAEgeAGQgJACgGAEQgHAFgBAJQgBAIAFAIQALAOAUABQAJAAAYgG");
  this.shape_38.setTransform(329.8,161.1);

  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#D8AA7B").s().p("AgFAfQgUgBgLgOQgFgIABgIQABgJAHgFQAGgEAJgCQAegGAcgEIgNA3QgWAGgJAAIgCAAg");
  this.shape_39.setTransform(329.8,161.1);

  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f().s("#000000").ss(2,0,1).p("AgbAyIBJhfIhaAAIAMAMQAKAYgFA7g");
  this.shape_40.setTransform(362.5,148.1);

  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#FFFFFF").s().p("AgOANIAAgCIABgGQAEgHADgEQADgDADgCIAHgCQAFABACADQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIgFABIgEACIgDACIgLANIgBABIgCgBg");
  this.shape_41.setTransform(333.1,149.6);

  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AAOAfIgDgBQgEgBgDgDIgGgJIgHgMQgFgMAAgKIAAgMQAAAAABgBQAAAAAAAAQAAAAABAAQAAAAAAAAIABABIAEAKIAHAUIACAMIAFAJIAFAFIADACIAAABIAAABIgBAAg");
  this.shape_42.setTransform(322.8,156.3);

  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#FFFFFF").s().p("AgDAFIgDgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACgEQACgCACgBIABAAIADABIACAFIABACIgCAFIgCACIgDAAIgDgDg");
  this.shape_43.setTransform(326.6,159.4);

  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#FFFFFF").s().p("AAAAEIgDgBIgCgCQgBgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBIABAAIACgBIACAAIAEAAIACACQACABgDADIgCABIgCABIgBgBg");
  this.shape_44.setTransform(352.7,144.8);

  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#FFFFFF").s().p("AAAAJIgEgDIgCgDQgCgDACgDIADgDQACgCABAAQADgBACADIACADQACADgDAFIgCADIgDABIgBAAg");
  this.shape_45.setTransform(350.5,144.7);

  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#FFFFFF").s().p("AgMAcQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgBIAFgDIAFgCQACgBAAgEIAAgBIAAgCIABgDIAJglIACAAIAAAAIABAMIgCAcIgCAEIAAABIgBABQgBAEgCACQgDADgCAAg");
  this.shape_46.setTransform(354,156);

  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AhbAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgCIAdgCQAmgCAZABIAiACIAeADQARABAMADIABABIAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAg");
  this.shape_47.setTransform(339.1,143.9);

  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f().s("#000000").ss(2,1).p("AAChEIACBDQABBDgJAD");
  this.shape_48.setTransform(356.8,153);

  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f().s("#000000").ss(2,1).p("AgOg+IACAzQAHA2AUAU");
  this.shape_49.setTransform(321.1,154.7);

  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f().s("#000000").ss(2).p("ADMhIQgEgNhdgJQhQgIhJAAQhWAAg/AeQgHADgFAXQgEAZACAZQAGBKAwASQAtAQAYgdQALgPADgSQACgKAEgKQAIgTALAAQAFAAAHAOQAOAeABACQAXAuAuAAQA/AABSgZQAKgDABgNQALhVgMgxg");
  this.shape_50.setTransform(338.5,151.6);

  this.instance_2 = new lib.Path_11();
  this.instance_2.parent = this;
  this.instance_2.setTransform(338.6,151.6,1,1,0,0,0,21.1,10.3);
  this.instance_2.alpha = 0.301;

  this.instance_3 = new lib.Path_12();
  this.instance_3.parent = this;
  this.instance_3.setTransform(362.5,148.3,1,1,0,0,0,4.6,4.8);
  this.instance_3.alpha = 0.301;

  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f().s("#000000").ss(2,1).p("AAagMQgKAAgMADQgVAIgIAP");
  this.shape_51.setTransform(327,147.3);

  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#D8AA7B").s().p("AAEgIQAMgEAKgBIgzAaQAIgPAVgGg");
  this.shape_52.setTransform(327,147.3);

  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f().s("#000000").ss(2,1).p("AgZgHIAXgBQAWADAGAO");
  this.shape_53.setTransform(345.7,145.9);

  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#D8AA7B").s().p("AgZgHIAXgBQAWADAGAOg");
  this.shape_54.setTransform(345.7,145.9);

  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f().s("#000000").ss(2).p("AAqgrQgPAchHA9");
  this.shape_55.setTransform(373.3,172.3);

  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f("#1073B9").s().p("AAsgsQgQAchHA9g");
  this.shape_56.setTransform(373.2,172.4);

  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f().s("#000000").ss(2).p("AjDB4QAUACANAMQAKAJAKAWQAHAOAFAEQAMAJAXgRQBCguB3hqQBzhjAFgMQAHgRgfgpQgdgngIAAQgNAAgiAEQghADgNAAIAEBVg");
  this.shape_57.setTransform(363.6,186.4,1,1,0,0,0,0.9,0);

  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f("#1073B9").s().p("AiKC3QgFgEgGgOQgKgWgLgJQgMgMgVgCIEAjVIgFhVQANAAAigDQAhgEANAAQAJAAAdAnQAeApgHARQgFAMhyBjQh4BqhCAuQgOALgLAAQgFAAgFgDg");
  this.shape_58.setTransform(363.4,186.4);

  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f().s("#000000").ss(2).p("AAmgjQgRALgSAPQgjAcgFAR");
  this.shape_59.setTransform(331.1,204.1);

  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f().s("#000000").ss(2,1).p("AAOAAQAAAGgEAEQgFAEgFAAQgFAAgEgEQgEgEAAgGQAAgEAEgFQAEgEAFAAQAFAAAFAEQAEAFAAAEg");
  this.shape_60.setTransform(334.1,223.8);

  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f().s("#000000").ss(2,1).p("AAOAAQAAAGgEAEQgEAEgGAAQgEAAgEgEQgFgEAAgGQAAgFAFgEQAEgEAEAAQAGAAAEAEQAEAEAAAFg");
  this.shape_61.setTransform(340.6,286.3);

  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f().s("#000000").ss(2,1).p("AgGD/QABhIABg8QACh1AEguQAGgxgBhYIgChN");
  this.shape_62.setTransform(334.9,303.4);

  this.shape_63 = new cjs.Shape();
  this.shape_63.graphics.f().s("#000000").ss(2,1).p("AAvg/QgLAhgjAqQgdAngSAN");
  this.shape_63.setTransform(396,297.7);

  this.shape_64 = new cjs.Shape();
  this.shape_64.graphics.f().s("#000000").ss(2,1,1).p("AGk1mQAAAQgCAOIgaCrQgJA8ADAjIAEAnQABAQAAAMIgBAQQgDAYgQAlQgSAtgEAPQgIAfgFCoQgECPghAtIAABYIALCWQAKCjgFBAIACABQgHBIgYC1QgYCzgJAwQgIAogPEmQgPEYABAgQABAQAKBQQAIBNgMAYIANCHQALCYgJBPIAPBOQAPBUABAbQAAAlAFCAQAAAFgBALIgIBSQghAAizhtIirhtIhGBCQgTgQg/gTIg8gRQgEgpgBgaQAAgQADhLIADhJQgHhagIhfQgSi8gHgUQgGgRgMj6QgNkDgDgPQgFgZgIjuIAAgcQgFiVABgjQAChDAHh0QAFhoABgXQAChBARjYQANivgDhfQgCgNAAgHQgEhKAFhyQAGiPAAgtIgKm8QAAgnAUheIAJguQAOg/AUhPIAliOIAKCUQACgJADgGIABgEIAGgKIABgCIAHgJQAFgHAJgHQABgBAEgEIDfi0QAOgNAUgWIBLhYIBOBaQAFAEALAKIAMAQQATAaAmBFIApA/QARAcAIAOQAPAcAMAbIAMAcQAOAlAGASIAIAcQAcBrgECHg");
  this.shape_64.setTransform(365.9,379.7);

  this.shape_65 = new cjs.Shape();
  this.shape_65.graphics.f().s("#000000").ss(2,1).p("Ag0CFQAYhVAmhEQAig9AJgz");
  this.shape_65.setTransform(333.2,218.7);

  this.shape_66 = new cjs.Shape();
  this.shape_66.graphics.f().s("#000000").ss(2,1).p("Ag2gOIAfAQQAlARApgF");
  this.shape_66.setTransform(374.8,263.1);

  this.shape_67 = new cjs.Shape();
  this.shape_67.graphics.f().s("#000000").ss(2,1).p("AgxiWQAIAeAbAxQAWAqADAiQAJBFADAQQAIAnATAW");
  this.shape_67.setTransform(382.7,193.7);

  this.shape_68 = new cjs.Shape();
  this.shape_68.graphics.f().s("#000000").ss(2,1).p("AB1hVQghBEhAAtQg9AvhLAL");
  this.shape_68.setTransform(387.7,273.3);

  this.shape_69 = new cjs.Shape();
  this.shape_69.graphics.f("#1073B9").s().p("AmhTyQAGh/AEibQAEi1gDghQgKhZATi4QAVjNgBhIIgCgUQgEhKAFhyQAGiNAAgtIgPm9IABAAQAFg0ARhQIAKguIAiiOIAmiOIAJCTIAMgdIAIgLIAUgSIDfi0QANgNAUgWIBMhZIBNBaIAQAPIAMAQQATAaAnBFIApA+IAYArQAQAcAMAbIAMAbQAOAlAFATIAIAcQAdBrgECHQAAAQgCAOIgbCrQgIA7ADAkIADAnQACAQgBAMIgBAQQgDAYgPAlQgTAtgEAPQgIAegECnQgECOghAuIAGDuQAGCjAGA/IAAABIrbIAIgDABg");
  this.shape_69.setTransform(366,298.2);

  this.shape_70 = new cjs.Shape();
  this.shape_70.graphics.f().s("#000000").ss(2,1,1).p("AA0hyQgdAVgaAmQg3BKAIBWIAOAFQASAFAVAA");
  this.shape_70.setTransform(332.4,197.1);

  this.shape_71 = new cjs.Shape();
  this.shape_71.graphics.f("#1073B9").s().p("AgkBuIgOgFQgIhWA3hKQAagmAdgVIgxDlIgDAAQgUAAgQgFg");
  this.shape_71.setTransform(332.4,197.1);

  this.shape_72 = new cjs.Shape();
  this.shape_72.graphics.f("#000000").s().p("AgIARQgEgHAAgKQAAgJAEgGQAEgIAEAAQAFAAAEAIQAEAGAAAJQAAAKgEAHQgEAGgFAAQgEAAgEgGg");
  this.shape_72.setTransform(329.6,152.8);

  this.shape_73 = new cjs.Shape();
  this.shape_73.graphics.f("#000000").s().p("AgIARQgEgHAAgKQAAgJAEgGQAEgIAEAAQAFAAAEAIQAEAGAAAJQAAAKgEAHQgEAGgFAAQgEAAgEgGg");
  this.shape_73.setTransform(345,152.8);

  this.shape_74 = new cjs.Shape();
  this.shape_74.graphics.f().s("#000000").ss(2,1).p("Agbg7QAGgKALgFQAKgFAKADQAMADAHAJQAIAKgBAMQAAAHgEAOQgEANAAAIQAAAQgGAbQgJAmgXgDQgXgDgDgW");
  this.shape_74.setTransform(369.3,150.4);

  this.shape_75 = new cjs.Shape();
  this.shape_75.graphics.f("#D8AA7B").s().p("AgKBOQgXgDgDgWIAJhwQAGgKALgFQAKgFAKADQAMADAHAJQAIAKgBAMQAAAHgEAOQgEANAAAIQAAAQgGAbQgIAjgUAAIgEAAg");
  this.shape_75.setTransform(369.3,150.4);

  this.shape_76 = new cjs.Shape();
  this.shape_76.graphics.f().s("#000000").ss(2,1,1).p("Am9k9QBfAUBohDQA1ggAhglICQADIAnCQQAEAOAHADQAJAHAMgJQADgDAEgPQAFgQABgCIgCB6IAfJ9IFdAGQACghgCgoQgDhPgRggQgLgTgmgoQgegggFgcQgGgkgXgmQgUgigYgTQgTgRgQgpQgOgnACgUQADgcgJgrQgMgwgEgYQgEgbgFgMQgDgJgHgLQgIgNgEgHQgZgsgGg0IAAgyIohAAIgVAqQgUAzADAvg");
  this.shape_76.setTransform(360.9,171.3);

  this.shape_77 = new cjs.Shape();
  this.shape_77.graphics.f("#41210E").s().p("ABhHEIgfp9IACh6IgGASQgEAPgDADQgMAIgJgGQgHgDgEgPIgniPIiQgDQghAlg1AhQhoBChfgUQgDgvAUgzIAVgqIIhAAIAAAyQAGA0AZAsIAMAUIAKATQAFANAEAbQAEAYAMAvQAJAsgDAcQgCAUAOAnQAQApATAQQAYAUAUAhQAXAmAGAlQAFAcAeAfQAmApALATQARAgADBPQACAngCAig");
  this.shape_77.setTransform(360.9,171.3);

  this.shape_78 = new cjs.Shape();
  this.shape_78.graphics.f().s("#000000").ss(2,1,1).p("ADlAAQgJCZh4BdQgVAPgkAOQgiANgYADQiUARgzjDQgZhggHj3IAng+IFbAAIBqCIg");
  this.shape_78.setTransform(344.8,156.3);

  this.shape_79 = new cjs.Shape();
  this.shape_79.graphics.f("#D8AA7B").s().p("AjVBxQgZhggIj3IAog+IFZAAIBrCIIgRCcQgICZh5BdQgVAPgjAOQgjANgYADIgXACQiBAAgui0g");
  this.shape_79.setTransform(344.8,156.3);

  this.shape_80 = new cjs.Shape();
  this.shape_80.graphics.f().s("#000000").ss(2,1,1).p("AgLIxQgfABgMgMQgOgNADgmQADgzgGgwIgLmtQgZhDgKhFQgGgkADgYQABgJAEgTQAFgTABgKQACgTgEgbQgFgfgDgPQgDgWAIg3QAHg0AIgYQADgJAHgNQAEgHACgEICHAAIBAQBIhDBgg");
  this.shape_80.setTransform(328.2,183.2);

  this.shape_81 = new cjs.Shape();
  this.shape_81.graphics.f("#41210E").s().p("Ag2ImQgOgNADgmQADgzgGgwIgLmtQgZhDgKhFQgGgkADgYQABgJAEgTQAFgTABgKQACgTgEgbIgIguQgDgWAIg3QAHg0AIgYQADgJAHgNIAGgLICHAAIBAQBIhDBgIg/AAIgFAAQgbAAgLgLg");
  this.shape_81.setTransform(328.2,183.2);

  this.shape_82 = new cjs.Shape();
  this.shape_82.graphics.f("#D8AA7B").s().p("AijjfIFAAAIAHD3Ik8DIg");
  this.shape_82.setTransform(353,183.2);

  this.shape_83 = new cjs.Shape();
  this.shape_83.graphics.f().s("#000000").ss(2).p("AFVAmQgVAWgtABQh5AEibgPQjqgXhMg0QgMgJgOgHQAGgMB+gFQAigBBMAAQBPAAAcgBQBygCAfADQA2AHAxAQQBPAZACAgQAAADAAAOg");
  this.shape_83.setTransform(343.5,133.9);

  this.shape_84 = new cjs.Shape();
  this.shape_84.graphics.f("#053D62").s().p("AgDAyQjpgXhNg0QgMgJgOgHQAGgMB/gFQAhgBBMAAIBrgBQBzgCAeADQA3AHAxAQQBPAZABAgIABARQgVAWgtABIg1ABQhlAAh7gMg");
  this.shape_84.setTransform(343.6,133.9);

  this.shape_85 = new cjs.Shape();
  this.shape_85.graphics.f("#1073B9").s().p("AA0fTIiqhtIhGBCQgTgQhAgTIg7gRIgFhEQAAgQADhLIADhIIgQi5QgRi9gHgSQgGgSgMj6QgNkDgDgPQgFgbgGjNQgHjIABgrIAIi3IAHiAQACg7ARjoQAOi1gFhiQgEhJAGhzQAGiNAAgvIgPm9QAHhMAkiWQAOg+AuiuIAKCTQAFgQAIgOQAIgMAXgTIDaiyQAVgSAjgpIA1hAIBOBaQAUAPAcAwIAzBTQBRB2AiB3QAgBygECOQgBAegTB3QgRBpADAqIAEAqQACAXgCASQgDAYgQAlQgSAtgEAPQgIAegFCpQgECOghAuIAABYIAKCXQAJCkgFA+QgHBKgXC0QgYC0gJAuQgHApgPEmQgOEXABAhQABAPAKBQQAIBOgLAYIANCHQALCXgJBPIALBOQALBUABAaQABArAMCFIgJBZQgiAAizhtg");
  this.shape_85.setTransform(365.9,379.7);

  this.shape_86 = new cjs.Shape();
  this.shape_86.graphics.f().s("#000000").ss(2,1).p("ABUhPQgLAAgQACQgfAFgaANQhTAoAABj");
  this.shape_86.setTransform(383.4,585);

  this.shape_87 = new cjs.Shape();
  this.shape_87.graphics.f("#743727").s().p("AAAg7QAagMAfgGQAQgCALAAIinCfQAAhjBTgog");
  this.shape_87.setTransform(383.4,585);

  this.shape_88 = new cjs.Shape();
  this.shape_88.graphics.f().s("#000000").ss(2,1).p("AAcAGIg4gL");
  this.shape_88.setTransform(353.7,574);

  this.shape_89 = new cjs.Shape();
  this.shape_89.graphics.f().s("#000000").ss(2,1).p("AAcAGIg3gL");
  this.shape_89.setTransform(350.8,576.3);

  this.shape_90 = new cjs.Shape();
  this.shape_90.graphics.f().s("#000000").ss(2,1).p("AAcAGIg3gL");
  this.shape_90.setTransform(347.9,578.7);

  this.shape_91 = new cjs.Shape();
  this.shape_91.graphics.f().s("#000000").ss(2,1).p("AhBA0QB1hOAOgZ");
  this.shape_91.setTransform(352.8,576.3);

  this.shape_92 = new cjs.Shape();
  this.shape_92.graphics.f().s("#000000").ss(2,1).p("AhCA6QAcgTAggXQA8guANga");
  this.shape_92.setTransform(356.2,576.9);

  this.shape_93 = new cjs.Shape();
  this.shape_93.graphics.f().s("#000000").ss(2,1).p("AhOg3IAZACQAdAEAYAJQBPAcAABE");
  this.shape_93.setTransform(348.1,586.4);

  this.shape_94 = new cjs.Shape();
  this.shape_94.graphics.f().s("#000000").ss(2,1).p("AFXhyIAADXIgrAAQgRgBg8ABQg4ABgIgBQg3gEgRAAQgZgBgwAFQiNANgkABQhlADhLgSQgIgiAOgkQAQgoAkAAQA4AEAkgHQAlgIBCg1QA5gtAfAFg");
  this.shape_94.setTransform(357.6,582.7);

  this.shape_95 = new cjs.Shape();
  this.shape_95.graphics.f("#743727").s().p("AlTBkQgIgiAOgkQAQgoAkAAQA4AEAkgHQAlgIBCg1QA5gtAfAFIFVAAIAADXIgrAAQgRgBg8ABIhAAAQg3gEgRAAQgZgBgwAFQiNANgkABIgcAAQhTAAhBgPg");
  this.shape_95.setTransform(357.6,582.7);

  this.shape_96 = new cjs.Shape();
  this.shape_96.graphics.f().s("#000000").ss(2,1).p("AFXAgIg0AAQg6gDg6gDQgEAAgIgKQgIgKgFAAQg0gChaANQhiAOgXABQhFABhXgHIhKgHIAAgvQBMASBlgDQAjgBCOgNQAwgFAZABQARAAA3AEQALABBSAAQBRAAAKgBg");
  this.shape_96.setTransform(357.9,595.7);

  this.shape_97 = new cjs.Shape();
  this.shape_97.graphics.f("#C59C70").s().p("AkNAaIhJgHIAAgvQBLASBlgDQAjgBCOgNQAwgFAZABQARAAA3AEQALABBSAAQBRAAAKgBIADA7Ig0AAIh0gGQgDAAgJgKQgIgKgEAAQg0gChbANQhhAOgYABIgZAAQg7AAhIgGg");
  this.shape_97.setTransform(357.9,595.7);

  this.shape_98 = new cjs.Shape();
  this.shape_98.graphics.f().s("#000000").ss(2,1).p("ABUhPQgLAAgQACQgfAFgaANQhTAoAABj");
  this.shape_98.setTransform(363.1,583);

  this.shape_99 = new cjs.Shape();
  this.shape_99.graphics.f("#743727").s().p("AAAg7QAagNAfgFQAQgCALAAIinCfQAAhjBTgog");
  this.shape_99.setTransform(363.1,583);

  this.shape_100 = new cjs.Shape();
  this.shape_100.graphics.f().s("#000000").ss(2,1).p("AAcAGIg3gL");
  this.shape_100.setTransform(333.4,572);

  this.shape_101 = new cjs.Shape();
  this.shape_101.graphics.f().s("#000000").ss(2,1).p("AAdAGIg5gL");
  this.shape_101.setTransform(330.6,574.3);

  this.shape_102 = new cjs.Shape();
  this.shape_102.graphics.f().s("#000000").ss(2,1).p("AAcAGIg3gL");
  this.shape_102.setTransform(327.7,576.7);

  this.shape_103 = new cjs.Shape();
  this.shape_103.graphics.f().s("#000000").ss(2,1).p("AhCA0QB2hOAOgZ");
  this.shape_103.setTransform(332.5,574.3);

  this.shape_104 = new cjs.Shape();
  this.shape_104.graphics.f().s("#000000").ss(2,1).p("AhCA6QAdgTAfgXQA8guANga");
  this.shape_104.setTransform(335.9,574.9);

  this.shape_105 = new cjs.Shape();
  this.shape_105.graphics.f().s("#000000").ss(2,1).p("AhOg3IAZACQAdAEAYAJQBPAcAABE");
  this.shape_105.setTransform(327.9,584.4);

  this.shape_106 = new cjs.Shape();
  this.shape_106.graphics.f().s("#000000").ss(2,1).p("AFXhyIAADXIgsAAQgQgBg8ABQg4ABgIgBQg3gEgRAAQgZgBgwAFQiNANgkABQhlADhMgSQgHgjANgjQARgoAkAAQA4AEAjgHQAmgIBCg1QA5gtAfAFg");
  this.shape_106.setTransform(337.3,580.7);

  this.shape_107 = new cjs.Shape();
  this.shape_107.graphics.f("#743727").s().p("AlUBkQgHgjANgjQARgoAkAAQA4AEAjgHQAmgIBCg1QA5gtAfAFIFVAAIAADXIgsAAQgQgBg8ABIhAAAQg3gEgRAAQgZgBgwAFQiNANgkABIgcAAQhUAAhBgPg");
  this.shape_107.setTransform(337.3,580.7);

  this.shape_108 = new cjs.Shape();
  this.shape_108.graphics.f().s("#000000").ss(2,1).p("AFXAgIg0AAQg6gDg6gDQgEAAgJgKQgIgKgEAAQg0gChaANQhiAOgXABQhFABhYgHIhJgHIAAgvQBLASBlgDQAkgBCOgNQAvgFAZABQASAAA3AEQAKABBTAAQBRAAAKgBg");
  this.shape_108.setTransform(337.7,593.7);

  this.shape_109 = new cjs.Shape();
  this.shape_109.graphics.f("#C59C70").s().p("AkNAaIhKgHIAAgvQBMASBlgDQAkgBCNgNQAwgFAZABQARAAA3AEQALABBSAAQBRAAAKgBIAEA7Ig1AAIh0gGQgEAAgIgKQgIgKgFAAQgzgChbANQhhAOgYABIgZAAQg7AAhIgGg");
  this.shape_109.setTransform(337.6,593.7);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.instance_3},{t:this.instance_2},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.instance_3},{t:this.instance_2},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},74).wait(1));

  // Layer 29
  this.shape_110 = new cjs.Shape();
  this.shape_110.graphics.f("#FFFFFF").s().p("AARAxIgCgCIAAAAIgDgFIgOgqIgPgaIgJgNQgFgBABgFQACgFAEACIAHgBQAHAAAIAEIAGAFIAJAIIAHAKIAFALIAEALIABAJIABAKIgDARIgDALQgCADgDAAIgDgBg");
  this.shape_110.setTransform(179.4,41.2);

  this.timeline.addTween(cjs.Tween.get(this.shape_110).wait(75));

  // machine
  this.shape_111 = new cjs.Shape();
  this.shape_111.graphics.f("#FFFFFF").s().p("AgEE+IAAp8QAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQAGAAgBAFIAAJ8QABAGgGAAQgEAAAAgGg");
  this.shape_111.setTransform(210.5,105.9);

  this.shape_112 = new cjs.Shape();
  this.shape_112.graphics.f().s("#000000").ss(2).p("ACDgbIAAC7IkFAAIAAi7QAAg3AmgnQAngnA1AAQA2AAAnAnQAmAnAAA3g");
  this.shape_112.setTransform(172.7,47.3);

  this.shape_113 = new cjs.Shape();
  this.shape_113.graphics.f("#E1EC3D").s().p("AiCCgIAAi7QAAg3AmgnQAngnA1AAQA2AAAnAnQAmAnAAA3IAAC7g");
  this.shape_113.setTransform(172.7,47.3);

  this.shape_114 = new cjs.Shape();
  this.shape_114.graphics.f().s("#000000").ss(2).p("ACxgdIlhAAIAAA7IFhAAg");
  this.shape_114.setTransform(172.7,66.4);

  this.shape_115 = new cjs.Shape();
  this.shape_115.graphics.f().s("#000000").ss(2).p("AClAAQAABEgwAxQgxAwhEAAQhDAAgxgwQgwgxAAhEQAAhDAwgxQAxgwBDAAQBEAAAxAwQAwAxAABDg");
  this.shape_115.setTransform(171.6,157.1);

  this.shape_116 = new cjs.Shape();
  this.shape_116.graphics.f().s("#000000").ss(2).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1g");
  this.shape_116.setTransform(171.6,157.1);

  this.shape_117 = new cjs.Shape();
  this.shape_117.graphics.f("#000000").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAmQgmAmg2AAQg1AAgmgmg");
  this.shape_117.setTransform(171.6,157.1);

  this.shape_118 = new cjs.Shape();
  this.shape_118.graphics.f().s("#000000").ss(2).p("AClAAQAABEgwAwQgxAxhEAAQhDAAgxgxQgwgwAAhEQAAhDAwgxQAxgwBDAAQBEAAAxAwQAwAxAABDg");
  this.shape_118.setTransform(171.6,113.8);

  this.shape_119 = new cjs.Shape();
  this.shape_119.graphics.f().s("#000000").ss(2).p("ACCAAQAAA2gmAmQgmAmg2AAQg1AAgmgmQgmgmAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1g");
  this.shape_119.setTransform(171.6,113.8);

  this.shape_120 = new cjs.Shape();
  this.shape_120.graphics.f("#000000").s().p("AhbBcQgmgmAAg2QAAg1AmgmQAmgnA1AAQA2AAAmAnQAmAmAAA1QAAA2gmAmQgmAng2AAQg1AAgmgng");
  this.shape_120.setTransform(171.6,113.8);

  this.shape_121 = new cjs.Shape();
  this.shape_121.graphics.f().s("#000000").ss(2).p("AA8A8Ih3AAIAAh3IB3AAg");
  this.shape_121.setTransform(262.8,590.9);

  this.shape_122 = new cjs.Shape();
  this.shape_122.graphics.f("#B3B3B3").s().p("Ag7A8IAAh3IB3AAIAAB3g");
  this.shape_122.setTransform(262.8,590.9);

  this.shape_123 = new cjs.Shape();
  this.shape_123.graphics.f().s("#000000").ss(2).p("AB5A8IjxAAIAAh3IDxAAg");
  this.shape_123.setTransform(214.5,590.9);

  this.shape_124 = new cjs.Shape();
  this.shape_124.graphics.f("#B3B3B3").s().p("Ah4A8IAAh3IDxAAIAAB3g");
  this.shape_124.setTransform(214.5,590.9);

  this.shape_125 = new cjs.Shape();
  this.shape_125.graphics.f().s("#000000").ss(2).p("AA8A8Ih3AAIAAh3IB3AAg");
  this.shape_125.setTransform(139.2,590.9);

  this.shape_126 = new cjs.Shape();
  this.shape_126.graphics.f("#B3B3B3").s().p("Ag7A8IAAh3IB3AAIAAB3g");
  this.shape_126.setTransform(139.2,590.9);

  this.shape_127 = new cjs.Shape();
  this.shape_127.graphics.f().s("#000000").ss(2).p("AAyBKIhjAAIAAiTIBjAAg");
  this.shape_127.setTransform(251.5,511);

  this.shape_128 = new cjs.Shape();
  this.shape_128.graphics.f("#FFFFFF").s().p("AgxBKIAAiTIBjAAIAACTg");
  this.shape_128.setTransform(251.5,511);

  this.shape_129 = new cjs.Shape();
  this.shape_129.graphics.f().s("#000000").ss(2).p("AB5EiIjxAAQgaAAgSgTQgTgSAAgaIAAnFQAAgaATgSQASgTAaAAIDxAAQAaAAASATQATASAAAaIAAHFQAAAagTASQgSATgaAAg");
  this.shape_129.setTransform(241.3,511);

  this.shape_130 = new cjs.Shape();
  this.shape_130.graphics.f("#B3B3B3").s().p("Ah4EhQgaABgSgTQgSgSAAgaIAAnFQAAgaASgSQASgSAaAAIDxAAQAaAAASASQASASABAaIAAHFQgBAagSASQgSATgagBg");
  this.shape_130.setTransform(241.3,511);

  this.shape_131 = new cjs.Shape();
  this.shape_131.graphics.f().s("#000000").ss(2,1).p("AggggIBBBB");
  this.shape_131.setTransform(219,193.1);

  this.shape_132 = new cjs.Shape();
  this.shape_132.graphics.f().s("#000000").ss(2,1).p("AggggIBBBB");
  this.shape_132.setTransform(219,174.6);

  this.shape_133 = new cjs.Shape();
  this.shape_133.graphics.f().s("#000000").ss(2).p("AAYBKIgvAAIAAiTIAvAAg");
  this.shape_133.setTransform(216.9,144.2);

  this.shape_134 = new cjs.Shape();
  this.shape_134.graphics.f("#2DB475").s().p("AgXBKIAAiTIAvAAIAACTg");
  this.shape_134.setTransform(216.9,144.2);

  this.shape_135 = new cjs.Shape();
  this.shape_135.graphics.f().s("#000000").ss(2).p("AAYBKIgvAAIAAiTIAvAAg");
  this.shape_135.setTransform(216.9,118.5);

  this.shape_136 = new cjs.Shape();
  this.shape_136.graphics.f("#EF5B30").s().p("AgXBKIAAiTIAvAAIAACTg");
  this.shape_136.setTransform(216.9,118.5);

  this.shape_137 = new cjs.Shape();
  this.shape_137.graphics.f().s("#000000").ss(2).p("AkO10IIcESMAAAAndIocAAg");
  this.shape_137.setTransform(241.6,444.5);

  this.shape_138 = new cjs.Shape();
  this.shape_138.graphics.f("#CCCCCC").s().p("AkNV4MAAAgrvIIbESMAAAAndg");
  this.shape_138.setTransform(241.6,444.8);

  this.shape_139 = new cjs.Shape();
  this.shape_139.graphics.f().s("#000000").ss(2).p("EgGVAoRIMrAAMAAAhQhIsrAAg");
  this.shape_139.setTransform(173.8,327.1);

  this.shape_140 = new cjs.Shape();
  this.shape_140.graphics.f("#E6E6E6").s().p("EgGVAoRMAAAhQhIMrAAMAAABQhg");
  this.shape_140.setTransform(173.8,327.1);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},74).wait(1));

  // right arm
  this.shape_141 = new cjs.Shape();
  this.shape_141.graphics.f().s("#000000").ss(2).p("AAYBKIgvAAIAAiTIAvAAg");
  this.shape_141.setTransform(216.9,92.8);

  this.shape_142 = new cjs.Shape();
  this.shape_142.graphics.f("#EF5B30").s().p("AgXBKIAAiTIAvAAIAACTg");
  this.shape_142.setTransform(216.9,92.8);

  this.shape_143 = new cjs.Shape();
  this.shape_143.graphics.f().s("#000000").ss(2,1).p("ABBgdIiBA7");
  this.shape_143.setTransform(266.7,126);

  this.shape_144 = new cjs.Shape();
  this.shape_144.graphics.f().s("#000000").ss(2,1).p("ABmAFQgRgFgjgCQhCgGhUAM");
  this.shape_144.setTransform(293.1,178.2);

  this.shape_145 = new cjs.Shape();
  this.shape_145.graphics.f().s("#000000").ss(2,1).p("ABCAGQgSgFgagCQgygHglAF");
  this.shape_145.setTransform(298.5,173.4);

  this.shape_146 = new cjs.Shape();
  this.shape_146.graphics.f().s("#000000").ss(2).p("AFtIuIhdgUIg2g5QjqiPiZkQQh4jVhGkuQgDgPAHgPQAGgOAPgHQBVgqAegMQAQgHAQAHQARAGAHAQIBmDbQAQAjAEANQAEAKAGAWQAGATAGAMQAJASAVAaQB2CFAuAsQAIADAKAIQAPAMABABQAJAGAaAJQBdAjAYAS");
  this.shape_146.setTransform(287.7,172.1);

  this.shape_147 = new cjs.Shape();
  this.shape_147.graphics.f("#1073B9").s().p("AEOIaIg2g5QjqiPiZkQQh4jVhGkuQgDgPAHgPQAGgOAPgHQBVgqAegMQAQgHAQAHQARAGAHAQIBmDbQAQAjAEANIAKAgQAGATAGAMQAJASAVAaQB2CFAuAsQAIADAKAIIAQANQAJAGAaAJQBdAjAYASIAEG/g");
  this.shape_147.setTransform(287.9,172.1);

  this.shape_148 = new cjs.Shape();
  this.shape_148.graphics.f().s("#000000").ss(2,1).p("AAagRQgEAGgIAHQgQAMgYAK");
  this.shape_148.setTransform(259.2,99.9);

  this.shape_149 = new cjs.Shape();
  this.shape_149.graphics.f().s("#000000").ss(2,1).p("AAvguQgrAdggANIgQAMQgJATAhAV");
  this.shape_149.setTransform(261.2,111.7);

  this.shape_150 = new cjs.Shape();
  this.shape_150.graphics.f().s("#000000").ss(2,0,1).p("ADxBSQgpAmhAARIg3AJQgSgugGgbQgdgCghgNQgegKgggSQghgRgTgTQgTgUACgOQADgNARgCQARgCASAJQApAWAiAGQAdAFAJgJQAOgPgJgSQgJgTgdAAQitgFgUgBQgRgBgMgKQgOgKAAgRQAAgQAcgFQALgCAdgBQBAgCBeADQBfADARAGQA0AUAoBBQAjA6ANBJg");
  this.shape_150.setTransform(243,103.7);

  this.shape_151 = new cjs.Shape();
  this.shape_151.graphics.f("#E1EC3D").s().p("AA3BJQgcgCgigNQgegKgggSQgggRgTgTQgUgUADgOQACgNARgCQARgCASAJQApAWAiAGQAeAFAIgJQAOgPgJgSQgJgTgcAAIjCgGQgRgBgMgKQgNgKAAgRQAAgQAcgFQAKgCAdgBQBAgCBfADQBfADAQAGQA0AUAoBBQAkA6ANBJQgqAmhAARIg3AJQgSgugGgbg");
  this.shape_151.setTransform(243.2,103.7);

  this.shape_152 = new cjs.Shape();
  this.shape_152.graphics.f().s("#000000").ss(2,1).p("ABVADIiKA/Igag/IA3gHQA+gRApgmQAGAjAAAbg");
  this.shape_152.setTransform(259.2,118);

  this.shape_153 = new cjs.Shape();
  this.shape_153.graphics.f("#D8AA7B").s().p("AhSAAIA4gHQA9gRAqgmQAGAigBAcIiJA/g");
  this.shape_153.setTransform(259.5,118.4);

  this.shape_154 = new cjs.Shape();
  this.shape_154.graphics.f().s("#000000").ss(2).p("AglAkQgCAQgJAIQgHAGgJAAQgJABgFgHQgIgKgCgWQgDgwAQgtICkABIAABAg");
  this.shape_154.setTransform(238.7,102.4);

  this.shape_155 = new cjs.Shape();
  this.shape_155.graphics.f("#E1EC3D").s().p("AhOA8QgIgKgCgWQgDgwAQgtICkABIAABAIh+AkQgCAQgJAIQgHAGgJAAIgBAAQgJAAgEgGg");
  this.shape_155.setTransform(238.7,102.4);

  this.shape_156 = new cjs.Shape();
  this.shape_156.graphics.f().s("#000000").ss(2).p("AgXAQQAEAIAIAFQAHAFAHAAQAIABAFgGQAEgDAEgKIAAgPIgvgbg");
  this.shape_156.setTransform(242.6,110);

  this.shape_157 = new cjs.Shape();
  this.shape_157.graphics.f("#E1EC3D").s().p("AADAfQgHAAgHgFQgIgFgEgIIAAgrIAvAdIAAAOQgEAKgEADQgFAFgHAAIgBAAg");
  this.shape_157.setTransform(242.6,110.4);

  this.shape_158 = new cjs.Shape();
  this.shape_158.graphics.f().s("#000000").ss(2).p("AAXAEQABAhgKAHQgHAFgIgEQgKgEgGgIQgEgHgBgPQAAgPgBgGIAAgjIAuAAg");
  this.shape_158.setTransform(237.1,108);

  this.shape_159 = new cjs.Shape();
  this.shape_159.graphics.f("#E1EC3D").s().p("AgBAtQgKgEgGgIQgEgHgBgPIgBgVIAAgjIAuAAIAAAxQABAhgKAHQgEACgFAAQgEAAgCgBg");
  this.shape_159.setTransform(237.1,108);

  this.instance_4 = new lib.Tween3("synched",0);
  this.instance_4.parent = this;
  this.instance_4.setTransform(267.4,156.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]}).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]},28).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.instance_4}]},13).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]},32).wait(1));

  // Lever
  this.instance_5 = new lib.Lever();
  this.instance_5.parent = this;
  this.instance_5.setTransform(235.1,316,1,1,0,0,0,8.6,67.8);

  this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:38.3,y:286.5},0).wait(14).to({rotation:0.6,x:235.4},0).wait(1).to({rotation:1.1,x:235.7},0).wait(1).to({rotation:1.7,x:236},0).wait(1).to({rotation:2.2,x:236.3},0).wait(1).to({rotation:2.8,x:236.5},0).wait(1).to({rotation:3.3,x:236.8,y:286.6},0).wait(1).to({rotation:3.9,x:237.1},0).wait(1).to({rotation:4.4,x:237.3},0).wait(1).to({rotation:5,x:237.6},0).wait(1).to({rotation:5.5,x:237.9},0).wait(27).to({rotation:5,x:237.6},0).wait(1).to({rotation:4.4,x:237.3},0).wait(1).to({rotation:3.9,x:237.1},0).wait(1).to({rotation:3.3,x:236.8},0).wait(1).to({rotation:2.8,x:236.5,y:286.5},0).wait(1).to({rotation:2.2,x:236.3},0).wait(1).to({rotation:1.7,x:236},0).wait(1).to({rotation:1.1,x:235.7},0).wait(1).to({rotation:0.6,x:235.4},0).wait(1).to({rotation:0,x:235.1},0).wait(14).to({regY:67.8,y:316},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(254.6,298.6,511,602);

})(blackBoxLib = blackBoxLib||{}, blackBoxImages = blackBoxImages||{}, createjs = createjs||{}, ss = ss||{});
var blackBoxLib, blackBoxImages, createjs, ss;
