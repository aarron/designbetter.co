(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
  width: 510,
  height: 590,
  fps: 24,
  color: "#FFFFFF",
  opacity: 1.00,
  manifest: [
    {src:"/img/animations/Bike_Path_20.png?1477668841326", id:"Path_20"}
  ]
};



lib.ssMetadata = [];


// symbols:



(lib.Path_20 = function() {
  this.initialize(img.Path_20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,95);


(lib.Symbol4 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AgPBwIgFgGQgHgHgHgJQgKgMgJgQQgKgQgLgXQgLgXgIgZQgJgagFgeIAAgIIAAgCIgBgCIABgGQABgHAHgDQAFgDAFABIAHACIAFAEIACAEIABAAIABAEIATAfQAPAYAXAXQAUATAZASIABABQgMgUgIgZIgHgaIgDgNIAAgCIABgEQADgEAEgBIAFACIACABIAAABIACACQAMARAUAJQANAHARADQAJACAMAAIAHAAIACABIgBACIgIABQgLABgKgBQgSgCgQgHQgRgIgOgOIABAEIAIAYQAKAcAPAUIALAOIACACIAAACQAFAJgHAGQgFACgEAAIgEgBIgBgBQgPgHgMgJQgagTgYgSQgUgSgRgUIADAJQADARAKAdIAPAoIAGAQIAHAOIANAaQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBAAIgBAAg");
  this.shape.setTransform(11,11.3);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.9,22.6);


(lib.Symbol3 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AAFC+QgGgCAAgJIAAgBIACguIABhGIgKhyIgJgtQgMg2gOglQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQARAmAOAzIAKAuIAAgBQAEgEAFgBQAKgBAEAJIAEALIAFALIAFAXQAEARABAaIgDBDIgEAWIgCABQAAAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAAgNIgCAOQgCAPgDAOIgDAOIgEANIgBACQgBAFgEACIgEABIgEgBg");
  this.shape.setTransform(4.4,19.1);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,8.8,38.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AA1CDQgSgOgLgLQgMgMgMgQQgTgagSgkQgNgYgOgpIgLgjIgJgjQgBgFACgEQADgEAEgBQAJgBAEAIIAAAAIAFAKIASAdIAcAnIAKAOQgDgQgCgRQgBgVAAgRQAAgFAFAAQAAAAABAAQAAABABAAQAAAAABAAQAAAAAAABIBUBUQABABAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgwgpgjggIACAZQADATAFARQAHAVAJAOQAIANAJAIIABABIAAABIABAAIAAABQACACAAADQgBAEgCACQgFAFgGgFIgBgBIgMgOIgwg6IgHgKQAKAXAOAaQANAcAVAeIAWAaQAJALAPANIAAAAQAEAEABAFQAAAFgEAEQgDAEgFABIgBAAQgFAAgDgDg");
  this.shape.setTransform(8.6,13.4);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.2,26.9);


(lib.Symbol1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("Ag2BPIAAgBIgCgJQgCgNABgMIACgQQABgHAFgKQACgGAHgJIAYghIAOgNIANgLIAOgIIANgFIAKgDIAJgBIABABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABgBAAIgQAIIgLAHIgLAKIgLAMIgIAOIgJAPIgHAPIgGAQIgHAPIgRAiIgGAHIgBABIgBAAg");
  this.shape.setTransform(5.9,7.9);

  this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.8,15.9);


(lib.Symbol6 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  this.stop();
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
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

  // Layer 9
  this.instance = new lib.Symbol1();
  this.instance.parent = this;
  this.instance.setTransform(29,410.8,1,1,-7,0,0,-3.2,66.8);
  this.instance.alpha = 0;
  this.instance._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).wait(1).to({regX:5.9,regY:7.9,rotation:-5.5,x:33.6,y:343.7,alpha:0.5},0).wait(1).to({rotation:-4,x:36.4,y:336.2,alpha:1},0).wait(1).to({rotation:-2.5,x:39.1,y:328.7,alpha:0.5},0).wait(1).to({rotation:-1,x:41.9,y:321.3,alpha:0},0).to({_off:true},1).wait(20).to({_off:false,regX:-3.2,regY:66.8,rotation:-7,x:29,y:410.8},0).wait(1).to({regX:5.9,regY:7.9,rotation:-5.5,x:33.6,y:343.7,alpha:0.5},0).wait(1).to({rotation:-4,x:36.4,y:336.2,alpha:1},0).wait(1).to({rotation:-2.5,x:39.1,y:328.7,alpha:0.5},0).wait(1).to({rotation:-1,x:41.9,y:321.3,alpha:0},0).to({_off:true},1).wait(4));

  // Layer 10
  this.instance_1 = new lib.Symbol2();
  this.instance_1.parent = this;
  this.instance_1.setTransform(37.4,398.1,1,1,-1,0,0,12.1,-29.3);
  this.instance_1.alpha = 0;
  this.instance_1._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(1).to({regX:8.6,regY:13.4,rotation:1.8,x:31.9,y:433.9,alpha:0.5},0).wait(1).to({rotation:4.5,x:29.1,y:426.9,alpha:1},0).wait(1).to({rotation:7.3,x:26.5,y:419.9,alpha:0.5},0).wait(1).to({rotation:10,x:23.8,y:412.7,alpha:0},0).to({_off:true},1).wait(20).to({_off:false,regX:12.1,regY:-29.2,rotation:-1,x:37.4,y:398.1},0).wait(1).to({regX:8.6,regY:13.4,rotation:1.8,x:31.9,y:433.9,alpha:0.5},0).wait(1).to({rotation:4.5,x:29.2,y:426.9,alpha:1},0).wait(1).to({rotation:7.3,x:26.5,y:419.8,alpha:0.5},0).wait(1).to({rotation:10,x:23.8,y:412.7,alpha:0},0).to({_off:true},1).wait(8));

  // Layer 11
  this.instance_2 = new lib.Symbol3();
  this.instance_2.parent = this;
  this.instance_2.setTransform(230.8,440.5,1,1,0,0,0,-28.7,26.9);
  this.instance_2.alpha = 0;
  this.instance_2._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).wait(1).to({regX:4.4,regY:19.1,rotation:4.3,x:262.9,y:445.5,alpha:0.5},0).wait(1).to({rotation:8.5,x:261.7,y:458.4,alpha:1},0).wait(1).to({rotation:12.8,x:260.3,y:471.2,alpha:0.5},0).wait(1).to({rotation:17,x:258.7,y:484.1,alpha:0},0).to({_off:true},1).wait(20).to({_off:false,regX:-28.7,regY:26.9,rotation:0,x:230.8,y:440.5},0).wait(1).to({regX:4.4,regY:19.1,rotation:4.3,x:262.9,y:445.5,alpha:0.5},0).wait(1).to({rotation:8.5,x:261.7,y:458.4,alpha:1},0).wait(1).to({rotation:12.8,x:260.3,y:471.2,alpha:0.5},0).wait(1).to({rotation:17,x:258.7,y:484.1,alpha:0},0).to({_off:true},1).wait(16));

  // Layer 14
  this.instance_3 = new lib.Symbol4();
  this.instance_3.parent = this;
  this.instance_3.setTransform(245.9,464.6,1,1,0,0,0,32.5,-35.7);
  this.instance_3.alpha = 0;
  this.instance_3._off = true;

  this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).wait(1).to({regX:10.9,regY:11.3,rotation:2.8,x:219.8,y:504.6,alpha:0.5},0).wait(1).to({rotation:5.5,x:215.4,y:497.6,alpha:1},0).wait(1).to({rotation:8.3,x:211.1,y:490.4,alpha:0.5},0).wait(1).to({rotation:11,x:206.7,y:483.2,alpha:0},0).to({_off:true},1).wait(20).to({_off:false,regX:32.5,regY:-35.7,rotation:0,x:245.9,y:464.6},0).wait(1).to({regX:10.9,regY:11.3,rotation:2.8,x:219.8,y:504.6,alpha:0.5},0).wait(1).to({rotation:5.5,x:215.4,y:497.6,alpha:1},0).wait(1).to({rotation:8.3,x:211.1,y:490.4,alpha:0.5},0).wait(1).to({rotation:11,x:206.7,y:483.2,alpha:0},0).to({_off:true},1).wait(13));

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#000000").ss(2).p("AgHgdIAKASQAJATgMAW");
  this.shape.setTransform(208.1,446.8);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#FFFFFF").s().p("AgGgdIAJARQAJAUgMAWg");
  this.shape_1.setTransform(208,446.9);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f().s("#000000").ss(2.7).p("AAjAZQgCAGgEAFQgIAHgKAAIgpAAQgXAAAAAYQgBAXAXABIAFAAQAqAAAPglgAAkASQAAAEgBAD");
  this.shape_2.setTransform(205.6,448.4);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#FFFFFF").s().p("AgVAgQgXAAAAgYQABgVAXAAIAoAAQALAAAHgIQAFgEACgGIgFAdQgOAigqAAg");
  this.shape_3.setTransform(204.7,454.2);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f().s("#000000").ss(2).p("AgrAOIgCgOQgBgJAGgIQAFgIAJgBIAlgFQANgCAKAHQAKAIACANQACAKgIALQgIAKgMABIglAGQgJABgIgFQgHgGgCgJg");
  this.shape_4.setTransform(209.1,446.8);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#FFFFFF").s().p("AgiAdQgHgGgCgJIgCgOQgBgJAGgIQAFgIAJgBIAlgFQANgCAKAHQAKAIACANQACAKgIALQgIAKgMABIglAGIgEAAQgHAAgGgEg");
  this.shape_5.setTransform(209.1,446.8);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f().s("#000000").ss(2).p("AAwAAQAAAUgPANQgNAPgUAAQgTAAgOgPQgOgNAAgUQAAgTAOgOQAOgOATAAQAUAAANAOQAPAOAAATg");
  this.shape_6.setTransform(212.9,446.1);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#FFFFFF").s().p("AghAiQgOgPAAgTQAAgSAOgPQAOgNATAAQATAAAPANQAOAPgBASQABATgOAPQgPANgTAAQgTAAgOgNg");
  this.shape_7.setTransform(212.9,446.1);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#FFFFFF").s().p("AAEA6IgLhzIABAAIAGASIADASIAEAVIABAnIgBAOIgBAFg");
  this.shape_8.setTransform(200.8,295.7);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#FFFFFF").s().p("AgFgiIABAAIACACIACAIIADALIACAHIABAGIAAALIgBAMIgCAJIgBADIgBABg");
  this.shape_9.setTransform(199,278.5);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f().s("#000000").ss(2.3,1).p("ABTgtQAAAfgUAYQgqA0hngX");
  this.shape_10.setTransform(92.8,105.4);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f().s("#000000").ss(2.3,1).p("ACQjCQg/AUhDA7QiGB0gXDD");
  this.shape_11.setTransform(52,94.2);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#000000").s().p("AAvBdQgigigcgwQgUgggbg7QgEgJAIgFQAJgFAEAJQAbA6ASAgQAcAuAhAgQAHAHgHAHQgEAEgDAAQgEAAgDgDg");
  this.shape_12.setTransform(80.5,254.2);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f().s("#000000").ss(2,1).p("AkjibIANAsQAVA2AiAuQBtCTDKASQCOANAwhaQASgjgEgoQgEgkgXgXQgQgSgrgSQhWgmiEgE");
  this.shape_13.setTransform(66.8,219.8);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#000000").s().p("AggAKQgKgBAAgJQAAgJAKABQAgACAhgDQAKgBAAAKQAAAIgKABQgTABgTAAIgbAAg");
  this.shape_14.setTransform(71.9,381.2);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#000000").s().p("Ag/gBQgIgFAFgIQAFgJAIAFQAyAbA7gJQAJgBADAHQADAKgKACQgTADgRAAQgwAAgogWg");
  this.shape_15.setTransform(63.9,383.8);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f("#000000").s().p("AhbCiQgJgFAFgIQBhiYBNiaQAFgJAIAFQAJAFgEAJQhSCfhdCTQgDAFgEAAQgDAAgDgCg");
  this.shape_16.setTransform(83.8,342.9);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f("#000000").s().p("AABAUIgSgdQgGgIAIgFQAJgFAGAIIATAdQAFAIgIAFQgEACgDAAQgEAAgEgFg");
  this.shape_17.setTransform(91.5,314.4);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f("#000000").s().p("AAbBAQgXgFgMgeQgHgQgIgXIgPgpQgDgJAKgCQAJgDAEAJIASA4IALAbQAIAPANACQAKACgDAKQgCAIgHAAIgDAAg");
  this.shape_18.setTransform(98.6,302.6);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#000000").s().p("AADBbQgHgFAEgJQANgcgNgxQgSg5gGgWQgCgKAJgCQAKgDACAJQAFAaAUA7QANA3gRAhQgDAFgEAAQgDAAgDgCg");
  this.shape_19.setTransform(84.4,288.8);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#000000").s().p("AgGANQgEgFAAgIQAAgGAEgGQADgGADAAQAEAAADAGQAEAGAAAGQAAAIgEAFQgDAGgEAAQgDAAgDgGg");
  this.shape_20.setTransform(49.3,426.8);

  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#000000").s().p("AAhB0QgJgDABgJIAHgaQAFgRgBgJQgBgMgJgPIgRgYIg/hlQgFgJAIgEQAJgFAFAIQA+BnASAYIALARQADAFAAALQgBAUgMAnQgBAHgFAAIgFAAg");
  this.shape_21.setTransform(50.8,426.8);

  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#000000").s().p("AAEA+QgUhXgGgeQgCgKAJgCQAKgDACAJQAEAfAWBWQADAKgKACIgEABQgGAAgCgHg");
  this.shape_22.setTransform(59.4,408);

  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f().s("#000000").ss(2).p("AASAAQAAAQgFAMQgGAMgHAAQgHAAgFgMQgFgMAAgQQAAgPAFgMQAFgMAHAAQAHAAAGAMQAFAMAAAPg");
  this.shape_23.setTransform(105.4,436.2);

  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#FFFFFF").s().p("AgMAcQgFgMAAgQQAAgPAFgMQAFgLAHgBQAHABAGALQAFAMAAAPQAAAQgFAMQgGALgHAAQgHAAgFgLg");
  this.shape_24.setTransform(105.4,436.2);

  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#000000").s().p("AAIAWQgbgBg3gNQgJgCADgIQACgKAKADQBuAZAVggQAFgIAJAFQAIAFgFAIQgRAcgyAAIgFAAg");
  this.shape_25.setTransform(73.8,416.8);

  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#000000").s().p("AhVAaQgHgHAGgHQAjggA0gHQA9gIAaAlQAFAIgJAFQgIAFgGgIQgUgcgyAJQgtAHgbAaQgDAEgDAAQgEAAgDgEg");
  this.shape_26.setTransform(68,396.7);

  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#000000").s().p("AhUAVQgFgJAHgFQApgdApgDQAwgDAjAeQAIAGgHAHQgIAHgHgGQgfgagnAFQgjAEgjAZQgEACgCAAQgEAAgDgFg");
  this.shape_27.setTransform(69.4,399.5);

  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#000000").s().p("AhUAUQgFgJAIgFQBRgyBQAfQAJAEgCAJQgDAIgJgEQhJgbhJAvQgDACgDAAQgEAAgDgGg");
  this.shape_28.setTransform(69.7,403);

  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#000000").s().p("AhXAVQgFgJAIgGQAogcAsgDQAtgDAoAcQAIAEgFAJQgFAIgIgFQgkgYgnADQglADglAaQgDACgDAAQgEAAgDgFg");
  this.shape_29.setTransform(71,406.7);

  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#000000").s().p("AhVATQgFgJAIgGQAlgaAtgBQAsgBAnAYQAIAEgFAJQgFAIgIgFQgigUgnABQgnACghAWQgEADgCAAQgEAAgDgFg");
  this.shape_30.setTransform(72.1,410.9);

  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#000000").s().p("ABEARQgggQgkgBQgiAAghAOQgJAEgFgJQgFgIAJgCQBNgjBOAkQAJAEgFAJQgEAGgFAAIgFgCg");
  this.shape_31.setTransform(73.1,413.4);

  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#000000").s().p("AAYBfQgPgIgGgRIgIghQgZhMgHgtQgDgJAKgDQAKgCABAJQAIAmAMAwIALArQAJAfAMAHQAJAFgFAJQgDAFgFAAQgCAAgDgCg");
  this.shape_32.setTransform(63.7,408);

  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#000000").s().p("AA1BkQg6gVghg4Qghg1AJg/QABgJAKADQAKACgCAKQgIA1AeAvQAcAxAzATQAJADgCAJQgCAIgGAAIgEgBg");
  this.shape_33.setTransform(53.8,393);

  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#000000").s().p("AAiAMQgigKghAIQgJADgDgKQgDgIAKgCQAmgKAnAMQAKADgDAHQgCAIgHAAIgDgBg");
  this.shape_34.setTransform(76.2,420.4);

  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#000000").s().p("AA3A1QhMgWgshFQgFgIAJgFQAIgGAFAJQAoA9BEAVQAJADgCAKQgCAHgGAAIgEgBg");
  this.shape_35.setTransform(65.2,422.9);

  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#000000").s().p("AgTEQQhggmgQhTIgXiEQgFgVgRglQgTgogFgUQgXhYBLh0QAFgGAGACQAHAAABAHIAAACIAAABQgEBvBLBDQANgbARgTQAbgdAggDQAlgDAWAZQASATAKAnQA0CzAVBkQAPBGAAAIQACAtglAPQgUAIgbAAQg6AAhVgkgAiwjLQgRA1AMAuQAEAPANAXQAPAbAEAKQAFANADARIAFAgQAFAaAHA9QAJA1AWAbQApAzBkAYIAvAKQAeAEASgEQAvgLgShXQgShYgZhcIgThHQgLgsgLgcQgXg6gzAXQgsAWgTAxQgCAGgFABQgFABgEgEQhQg/gHhpQgTAhgJAcg");
  this.shape_36.setTransform(65.2,408.8);

  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#333333").s().p("ACKEqQg2gFgjgHQgogKgqgTQgWgKgXgUQgYgVgKgUQgEgJgGgbIgaiWQgDgQgDgIIgIgPIgJgPQggg1AJg9QAJg7AuhGIAAAAQgCAnAEAYQAFAkAYAmQAXAjAfAXQANgkAOgNQAlgnAiAEQAZADANANQAKAJAIATQAFANAEAQIAEASQAwCZAgClQAFAXgCANQgDAXgRAGQgHAEgMADQgLADgGAAIgCAAg");
  this.shape_37.setTransform(65.2,408.7);

  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f().s("#000000").ss(2).p("AAOA1QAJAAAHgQQAGgQAAgVQAAgUgGgQQgHgQgJAAIgxAMIAABOg");
  this.shape_38.setTransform(109,436.3);

  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#FFFFFF").s().p("AgjAmIAAhOIAxgLQAJAAAHAPQAGAPAAAVQAAAVgGAQQgHAPgJABg");
  this.shape_39.setTransform(109,436.3);

  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f().s("#000000").ss(2).p("AAbAAQAAAfgIAWQgIAXgLAAQgKAAgIgXQgIgWAAgfQAAgeAIgWQAIgXAKAAQALAAAIAXQAIAWAAAeg");
  this.shape_40.setTransform(112.8,436.4);

  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f().s("#000000").ss(2.1).p("ABiA0Ii7g8IgIgrIDFA2g");
  this.shape_41.setTransform(93.5,432.6);

  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f("#FFFFFF").s().p("AhagIIgIgrIDFA2IgCAxg");
  this.shape_42.setTransform(93.6,432.6);

  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#000000").s().p("ACFEbQh6img1hhQhWiXgXiOQgBgKAJgDQAKgCABAJQAXCNBWCWQA0BhB5CjQAGAIgJAFQgDACgDAAQgFAAgDgEg");
  this.shape_43.setTransform(69.3,256.9);

  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f("#000000").s().p("AjzMAQgHgrATgwQAJgWAjg9IBtjAIA2hhQAfg4AagmQAVgfAxg0QAzg1AUgcQBRhrgziJQgNgkgWg0IgmhXIhQjCQguhwgjhRQgEgIAIgFQAJgFAEAIQAhBOAtBqIBMC5QAXA2A3B5QAoBtgTBNQgLAogbAqQgWAhglAmQhXBcg8BrIhxDGQgUAkg1BVQgqBOAIA1QACAJgKADIgEAAQgGAAgBgHg");
  this.shape_44.setTransform(98.5,298);

  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#000000").s().p("AidF2QgKgDADgJQAWhFAPiSQAPiRAWhFQAbhUBHhSQAXgbB1huQAHgHAHAHQAHAHgHAHQh2BwgdAjQhHBWgYBfQgPA5gOCMQgOCBgWBFQgCAIgGAAIgEgBg");
  this.shape_45.setTransform(73.5,330.1);

  this.shape_46 = new cjs.Shape();
  this.shape_46.graphics.f("#000000").s().p("AgfC0IgigOIhEgVQgIgDABgHIAFiYIAAgVQABgMADgIQACgGAKgMQANgNACgEQAGgKAFgPIAIgZQAGgSALgWQACgEAFAAQAGgBADADQAYAcAMAKQATASAXAJQAcAKA5AEQAKABAAAJQAAAMAEAZQAGAbAAALIADA3IAHAzQACAegJATQgDAGgFgBIhDAcIgcANQgSAIgLAAQgKAAgXgIgAAFCpQgCAAAGgDIAMgFIBhgoQAIgUgFgoQgIgugCgQQgFgrAAgVQgFgJAAgIQAPgGgQACQgGgDgQgBIgYgCQgegGgVgKQgSgJgTgSIgWgZIgRAsQgNAhgQAUQgKANgCAOIgBAgIgEBXIAAATIgBASIAAAJQAKAFAQAEIAjAJIAhANQAVAJAKAAIAAAAg");
  this.shape_46.setTransform(63.7,384.2);

  this.shape_47 = new cjs.Shape();
  this.shape_47.graphics.f("#FFFFFF").s().p("AiDCHIAHi7QAUgXAJgNQAOgVAEgUIAFgXQALgPABgKIABgBIAZAcIAQARQARAOAYAIQAuAQAogBIACAAQgDAIAFANQAHASAAAEIAAASQgCALACAHIADAMIAAAQIAFBCIADAbQABARgHAIIh4Ayg");
  this.shape_47.setTransform(63.7,384.2);

  this.shape_48 = new cjs.Shape();
  this.shape_48.graphics.f("#C59C70").s().p("AkxL9IAAhQQASg3AKhOIAPiJQAJhRAPg3QAThIAig1QATgeAfghQATgTAngmIA4gzIgjh8Qh6ilg0heQhTiUgViMQAvAXAvAQQBFAXArAAQBlACA2gtQAugmACg5QAoBYBGCqIBsECQAWAzAIAdQAOAvgCAmQgDBNg9BJQgQATghAiQgjAjgPASQgkArg0BbIi2FDQgXAogJAZQgMAnAHAfg");
  this.shape_48.setTransform(88.6,298);

  this.shape_49 = new cjs.Shape();
  this.shape_49.graphics.f("#000000").s().p("AgBB9QgLAAgJgEQgTgIgVggIgdgyQgVgigGgRQgKgcAEgeQAEgaAMgIQALgIAdgBQAEAAADADQADACAAAEIABgBIAAgEIABgDIADgCQAEgCACAAIAFABIAEAEICgDWQAEAGgFAGQgKALgGADQgFACgQAAQgEAAgDgEQgEgEACgFIABgDIgCABQgCAAgFAKQgDAFgGAAIgaAAQgFAAgDgEIgCgDQgCADgEADQgGADgJAAIgDAAgAhpg2QAEAdAZApQAYApAWAcQAbAkAPgeQADgFAGAAIARAAQAFAAADAEQADAEgCAFIgBAEIAFAAQACgBAGgJQADgFAFAAIAYAAIACAAIiHi0QgCAFgHAAIgQAAQgEAAgDgDQgDgDAAgEIAAgDQgiAGAGAogABkBlIAAACIABAAIADgCIgDgEIgBAEg");
  this.shape_49.setTransform(56.1,426.5);

  this.shape_50 = new cjs.Shape();
  this.shape_50.graphics.f("#E6E6E6").s().p("AgQBwIgKgHQgDgCgGgIIgHgLQgdgpgMgVQgNgWgTgpQgBgDAEgaQADgaABgDQADgFAIgDQALgEAUAAIAAAPIAQAAIAFgSIChDXIgLAMIgTAAIAGgPIgYAAIgIAPIgaAAIAFgQIgRAAIgKASIgJAAQgMAAgHgDg");
  this.shape_50.setTransform(56,426.5);

  this.shape_51 = new cjs.Shape();
  this.shape_51.graphics.f().s("#000000").ss(2.3,1).p("Aj9iSQgIBPAvAnQAiAcBaAUQCaAjAOAEQBpAgBIA5");
  this.shape_51.setTransform(75.6,122.5);

  this.shape_52 = new cjs.Shape();
  this.shape_52.graphics.f("#000000").s().p("AgNAPQgBgTALgPQADgIAJAFQAIAFgFAIQgIAJABAPQABAJgIAAQgKAAgBgJg");
  this.shape_52.setTransform(130.5,211.8);

  this.shape_53 = new cjs.Shape();
  this.shape_53.graphics.f("#000000").s().p("AgQAVQgJgDACgKQACgLAMgJQAKgJANACQAKABAAAIQAAAEgDAEQgDACgEAAQgHAAgGACQgEAEgBAIQgBADgEADIgFABIgCAAg");
  this.shape_53.setTransform(123.4,216.1);

  this.shape_54 = new cjs.Shape();
  this.shape_54.graphics.f("#000000").s().p("AgBAWQgJgIgDgMQgCgKAGgLQAEgJAHAFQAIAFgEAJQgDAFACAEQACAFAEADQADADAAAEQAAAFgDACQgDAEgDAAQgEAAgCgEg");
  this.shape_54.setTransform(116.6,221.8);

  this.shape_55 = new cjs.Shape();
  this.shape_55.graphics.f().s("#000000").ss(2,1).p("ABxiYQglBCgvBHQhdCMgxAc");
  this.shape_55.setTransform(86.4,150.8);

  this.shape_56 = new cjs.Shape();
  this.shape_56.graphics.f().s("#000000").ss(2,1,1).p("AlCihQBGAtCiBQQCwBXBwAoIAqAQQAxAVAiAVQg/AEgXAJ");
  this.shape_56.setTransform(117.8,198.4);

  this.shape_57 = new cjs.Shape();
  this.shape_57.graphics.f().s("#000000").ss(2,1).p("AibiiQAmAmAqA1QAzBCAYAaQARATA8A2QAgAcAvAq");
  this.shape_57.setTransform(82.1,172.7);

  this.shape_58 = new cjs.Shape();
  this.shape_58.graphics.f().s("#000000").ss(2,1).p("AgsnEQhEA/hMBdQhCBQgiA2QglA7gRAxQgVA8AIA4QAEAaAJANQAIALAVAOQDUCJDtBTQBQAcAkAPQA7AbAvAk");
  this.shape_58.setTransform(73.4,170.4);

  this.shape_59 = new cjs.Shape();
  this.shape_59.graphics.f().s("#000000").ss(2,1).p("AgWAJIASgGQARgFAKgG");
  this.shape_59.setTransform(139.3,221.8);

  this.shape_60 = new cjs.Shape();
  this.shape_60.graphics.f().s("#000000").ss(2,1).p("AhGgjIAhA6QAEAIAQAeQARAbAPAAQASABARgMQANgKAGgKQAEgHgEgPQgCgHgJgcQgJgZgIgOQgNgVgcgb");
  this.shape_60.setTransform(138.5,220.1);

  this.shape_61 = new cjs.Shape();
  this.shape_61.graphics.f().s("#000000").ss(2).p("AAogQQgKAOgQAIQgdATgYgZ");
  this.shape_61.setTransform(134.9,231);

  this.shape_62 = new cjs.Shape();
  this.shape_62.graphics.f().s("#000000").ss(2,1).p("AgygnIAXAnQAaAlAMACQAOADAPgKQAGgGAFgF");
  this.shape_62.setTransform(130.9,227.1);

  this.shape_63 = new cjs.Shape();
  this.shape_63.graphics.f().s("#000000").ss(2,1).p("Ag4gjIAXAjQAaAjALABQARABAQgKQARgKADgO");
  this.shape_63.setTransform(125.3,230.6);

  this.shape_64 = new cjs.Shape();
  this.shape_64.graphics.f().s("#000000").ss(2,1).p("AhLhrIANAgQAMAmgBAXQgBAeALAQQAGAJAcAWQAOAMAaAYQAWAPAWgK");
  this.shape_64.setTransform(115.5,222.6);

  this.shape_65 = new cjs.Shape();
  this.shape_65.graphics.f("#C59C70").s().p("AE+IiQgIgBgEgBQgHgDgGgIQgWAKgWgPQgagYgQgMQgcgWgGgJQgLgQABggQABgVgKghQgwgkg7gbQgjgPhPgcQjuhTjUiJQgWgOgIgLQgJgLgEgaQgHg4AVg+QAQgxAlg7QAggyBFhUQBNhcBChAQBOADDWBdQgmBDguBIQhiCTgxAcIAhAqIAnAuQARATA8A0IBNBGQBhAzBqAyQBzA2BRAdIArAQQAxAVAhAVIhVANIAKARQALAUAGASIALAjQAEAPgEAHQgFAKgTAMQgWANgTgBQgKAPgPAKQgeATgYgbQgDAOgPAKQgQAKgQAAgAArnBIACgEIAAAFIgCgBgAArnBIAAAAg");
  this.shape_65.setTransform(93.9,179.7);

  this.shape_66 = new cjs.Shape();
  this.shape_66.graphics.f().s("#000000").ss(2).p("AhBgIIB8gNQAKgBACAQQABAGgEADQgEAGgFAAIhwANQgFABgFgEQgEgFgBgGQgCgIAAgCQAAgFAFgBg");
  this.shape_66.setTransform(194.7,268.1);

  this.shape_67 = new cjs.Shape();
  this.shape_67.graphics.f("#FFFFFF").s().p("Ag/ASQgEgEgBgGIgCgKQAAgGAFAAIB8gNQAKgBACAPQABAHgEADQgEAGgFAAIhwANIgBAAQgFAAgEgEg");
  this.shape_67.setTransform(194.7,268.1);

  this.shape_68 = new cjs.Shape();
  this.shape_68.graphics.f().s("#000000").ss(2,1).p("ADSgLQgaAAgZADQgTACgBAAQglAGg4APQhuAihmA6QgLAGgOAAQgcAAgPgWQgMgSAEgWQAFgWATgLQBQgvB+goQA/gUA1gMQAJgDATgCQAhgFAigBQAvAAgCAzQAAATgKAPQgKAQgOAAg");
  this.shape_68.setTransform(131.6,223.3);

  this.shape_69 = new cjs.Shape();
  this.shape_69.graphics.f("#000000").s().p("AjqBbQgMgSAEgWQAFgWATgLQBQgvB+goQA/gUA1gMQAJgDATgCQAhgGAiAAQAvAAgCAzQAAATgKAPQgKAQgOAAQgaAAgZACIgUADQglAGg4APQhuAihmA5QgLAHgOAAQgcAAgPgWg");
  this.shape_69.setTransform(131.6,223.3);

  this.shape_70 = new cjs.Shape();
  this.shape_70.graphics.f().s("#000000").ss(2,1).p("AIZDcQARAAAMgMQALgMAAgRQAAgQgLgMQgMgMgRAAIgBAAQg5gEgrgUQg0gYhEhOQhVheg+gvQhthTiggHQgzgCgyAGIgnAGQgwALhAAUQiAAohPAwQgSAKAAAVQAAALAHAJQAIAMAOADQANADANgHQBog7BygjQA6gRAkgFIAmgEQAvgDAuAEQCTANBYBMQAlAgAyA2QA+BFASARQAwAwAtAYQA3AdBCAEg");
  this.shape_70.setTransform(166.5,235.5);

  this.shape_71 = new cjs.Shape();
  this.shape_71.graphics.f("#CCCCCC").s().p("AIYDcQhAgEg4gdQgtgYgwgwQgSgRg9hFQgzg2glggQhXhMiTgNQgvgEgvADIgmAEQgkAFg5ARQhzAjhoA7QgNAHgNgDQgOgDgIgMQgHgJABgLQAAgVARgKQBPgwCAgoQBAgUAwgLIAngGQAygGAzACQCgAHBuBTQA9AvBVBeQBEBOA0AYQArAUA5AEIACAAQAQAAAMAMQAMAMAAAQQAAARgMAMQgMAMgQAAg");
  this.shape_71.setTransform(166.5,235.5);

  this.shape_72 = new cjs.Shape();
  this.shape_72.graphics.f().s("#000000").ss(2,1).p("AAjADIhFgF");
  this.shape_72.setTransform(195.3,257.9);

  this.shape_73 = new cjs.Shape();
  this.shape_73.graphics.f().s("#000000").ss(2,1).p("AgeA+QAaAAAQgTQATgSAAgZQAAgZgTgSQgQgSgaAA");
  this.shape_73.setTransform(224.3,254.1);

  this.shape_74 = new cjs.Shape();
  this.shape_74.graphics.f().s("#000000").ss(2,1,1).p("AjFhvIGJApQAZADARAUQAQAUgDAaQgCAYgVAQQgUAQgZgDIkvgfIAIBNQgsAOgjAAIgbgCIgciDQgKgtANgYQAMgYAiADg");
  this.shape_74.setTransform(210.9,256.1);

  this.shape_75 = new cjs.Shape();
  this.shape_75.graphics.f("#CCCCCC").s().p("AjaBuIgciDQgKgtANgYQAMgYAiADIGJApQAZADARAUQAQAUgDAaQgCAYgVAQQgUAQgZgDIkvgfIAIBNQgsAOgjAAg");
  this.shape_75.setTransform(210.9,256.1);

  this.shape_76 = new cjs.Shape();
  this.shape_76.graphics.f().s("#000000").ss(2,1,1).p("AArghIAAgNIhMAAIgHAHQgFALAMAVQAVAgANAWIAfAAQgIgVgDgUQgGgnAcAAg");
  this.shape_76.setTransform(274.8,219.1);

  this.shape_77 = new cjs.Shape();
  this.shape_77.graphics.f("#000000").s().p("AABAvIgig2QgMgVAFgLIAHgHIBMAAIAAANQgcABAGAnQADATAIAVg");
  this.shape_77.setTransform(274.8,219.1);

  this.shape_78 = new cjs.Shape();
  this.shape_78.graphics.f().s("#000000").ss(2,1).p("AE8iWQAAAqgyAwQgZAXheBDQhDAwhQApQhpA2hjAXQgzAMguADQAQgRAAgYQAAgVgNgQIABAAQAqgDAjgIQCXggCihvQBAgtAsgpQApgpABgSIgqA1Igmg3IgKgTIANgZIBNAAQApAAANAIQATAMAAAqg");
  this.shape_78.setTransform(256.1,237);

  this.shape_79 = new cjs.Shape();
  this.shape_79.graphics.f("#CCCCCC").s().p("AklCrQAAgVgMgQIABAAQAqgDAjgIQCWggCjhvQBAgtAsgpQApgpABgSIgqA1Igmg3IgLgTIAOgZIBNAAQApAAAMAIQAUAMAAAqQAAAqgyAwQgZAXheBDQhDAwhPApQhqA2hjAXQgzAMguADQAPgRAAgYg");
  this.shape_79.setTransform(256.8,236.9);

  this.shape_80 = new cjs.Shape();
  this.shape_80.graphics.f().s("#000000").ss(2,1).p("AAFAAQgEgBgBAAQgFABABAC");
  this.shape_80.setTransform(194.1,24.7);

  this.shape_81 = new cjs.Shape();
  this.shape_81.graphics.f().s("#000000").ss(2,1).p("AAFAOQAEgJgBgFQgCgCgDgCIgKgJ");
  this.shape_81.setTransform(187.5,14.4);

  this.shape_82 = new cjs.Shape();
  this.shape_82.graphics.f().s("#000000").ss(2,1).p("AAVADQgWgEgUgB");
  this.shape_82.setTransform(158.4,3.4);

  this.shape_83 = new cjs.Shape();
  this.shape_83.graphics.f().s("#000000").ss(2,1).p("AANgCQgMAGgNgB");
  this.shape_83.setTransform(148,8.5);

  this.shape_84 = new cjs.Shape();
  this.shape_84.graphics.f().s("#000000").ss(2,1).p("AgHgcQABAeAOAb");
  this.shape_84.setTransform(136.1,14.3);

  this.shape_85 = new cjs.Shape();
  this.shape_85.graphics.f().s("#000000").ss(2,1).p("Ag0gaQAQgIAIAAQANgBASASQAlAgANAV");
  this.shape_85.setTransform(146.8,24.6);

  this.shape_86 = new cjs.Shape();
  this.shape_86.graphics.f().s("#000000").ss(2,1).p("AgPAAQAPgDAQAF");
  this.shape_86.setTransform(163.5,37.5);

  this.shape_87 = new cjs.Shape();
  this.shape_87.graphics.f().s("#000000").ss(2,1).p("AAIgJQgHARgIAC");
  this.shape_87.setTransform(191.5,45.3);

  this.shape_88 = new cjs.Shape();
  this.shape_88.graphics.f().s("#000000").ss(2,1).p("Ag4gtQADAAAOgCQAKgBAHABQALADALANQAhAhAYAu");
  this.shape_88.setTransform(175.2,15.7);

  this.shape_89 = new cjs.Shape();
  this.shape_89.graphics.f().s("#000000").ss(2,1).p("ACyCsQhOgxhThEQikiGgehc");
  this.shape_89.setTransform(148.9,33.8);

  this.shape_90 = new cjs.Shape();
  this.shape_90.graphics.f().s("#000000").ss(2,1).p("Ai8i6QADASBMBIQBDBBAjAZQAjAYChCp");
  this.shape_90.setTransform(152.3,33.4);

  this.shape_91 = new cjs.Shape();
  this.shape_91.graphics.f().s("#000000").ss(2,1).p("ADPDVQgTgmgmg1QhMhphbhIQhdhJg5gyIgngh");
  this.shape_91.setTransform(156.7,30.8);

  this.shape_92 = new cjs.Shape();
  this.shape_92.graphics.f().s("#000000").ss(2,1).p("AjVjWIAsAWQA2AdA3AqQCrCEBoDM");
  this.shape_92.setTransform(160.7,28.4);

  this.shape_93 = new cjs.Shape();
  this.shape_93.graphics.f().s("#000000").ss(2,1).p("ACgDkQAMhVgihjQhFjGjohJ");
  this.shape_93.setTransform(180.6,23.1);

  this.shape_94 = new cjs.Shape();
  this.shape_94.graphics.f().s("#000000").ss(2,1).p("ADpD4QAJhHgPhWQgcirhyhMQhvhMhigNQgsgGhEAM");
  this.shape_94.setTransform(170.1,26.2);

  this.shape_95 = new cjs.Shape();
  this.shape_95.graphics.f().s("#000000").ss(2,1).p("ADwDzQgBg9gXhPQgdhggzhIQiIjKjvAc");
  this.shape_95.setTransform(166,28);

  this.shape_96 = new cjs.Shape();
  this.shape_96.graphics.f().s("#000000").ss(2,1).p("AjhjrIA7AOQBHAWBAAoQDLCCA2EJ");
  this.shape_96.setTransform(163.3,28.3);

  this.shape_97 = new cjs.Shape();
  this.shape_97.graphics.f().s("#000000").ss(2,1).p("AgHgFIAcAVQAgAbALAUQgMACgHgKg");
  this.shape_97.setTransform(174.2,14.6);

  this.shape_98 = new cjs.Shape();
  this.shape_98.graphics.f("#000000").s().p("AARAaIg0g8IAeAXQAeAZALAVIgDAAQgKAAgGgJg");
  this.shape_98.setTransform(177,17.5);

  this.shape_99 = new cjs.Shape();
  this.shape_99.graphics.f().s("#000000").ss(2,1).p("AgChaIAOAzQAPA4gFAhQgWhkgUgfIAEgFQAFgFAJABg");
  this.shape_99.setTransform(186.7,38.6);

  this.shape_100 = new cjs.Shape();
  this.shape_100.graphics.f("#000000").s().p("AgVg8IAEgFQAFgFAJABIAOAzQAPA4gFAhQgWhkgUgfg");
  this.shape_100.setTransform(186.8,36.5);

  this.shape_101 = new cjs.Shape();
  this.shape_101.graphics.f().s("#000000").ss(2,1).p("AgigrIAYASQAcAZAgAiQAEAEgEAEQgEADgIgBQgHgBgNgEIgLgFIg3g3QgDgHAAgGQAAgMARADg");
  this.shape_101.setTransform(164.4,42.3);

  this.shape_102 = new cjs.Shape();
  this.shape_102.graphics.f("#000000").s().p("AAmAsQgHgBgNgEIgLgFIg3g3QgDgHAAgGQAAgMARADIAYASQAcAZAgAiQAEAEgEAEQgDACgGAAIgDAAg");
  this.shape_102.setTransform(164.4,42.3);

  this.shape_103 = new cjs.Shape();
  this.shape_103.graphics.f().s("#000000").ss(2,1).p("AgdgYIAdAJQAdAOANAUQgHAJgWgEQgNgCgVgSIgTgQIACgFQADgFAGgCg");
  this.shape_103.setTransform(148.6,27.6);

  this.shape_104 = new cjs.Shape();
  this.shape_104.graphics.f("#000000").s().p("AANAYQgNgCgVgSIgTgQIACgFQADgFAFgCIAdAJQAeAOAMAUQgFAGgMAAIgLgBg");
  this.shape_104.setTransform(148.7,27.6);

  this.shape_105 = new cjs.Shape();
  this.shape_105.graphics.f().s("#000000").ss(2,1).p("Ag3g0IA3AmQA7AoAQAVQgcAJgMgEQgHgCgtgoQg1grgIgFIAEgIQAGgHANABg");
  this.shape_105.setTransform(161.1,19.1);

  this.shape_106 = new cjs.Shape();
  this.shape_106.graphics.f("#000000").s().p("AAkA0QgGgCgtgoQg1grgIgFIAEgIQAFgHANABIA3AmQA8AoAQAVQgTAGgMAAQgGAAgEgBg");
  this.shape_106.setTransform(161,19.1);

  this.shape_107 = new cjs.Shape();
  this.shape_107.graphics.f().s("#000000").ss(2,1).p("AgOhJIAcAtQAeAzAFAuQABAFgEABQgEACgCgEQgxhWgmgtIADgLQAHgKAXAGg");
  this.shape_107.setTransform(176.3,38.9);

  this.shape_108 = new cjs.Shape();
  this.shape_108.graphics.f("#000000").s().p("AAnBJQgxhWglgtIACgLQAIgKAXAGIAbAtQAeAzAFAuQABAFgEABIgCABQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAAAgBg");
  this.shape_108.setTransform(176.3,38.9);

  this.shape_109 = new cjs.Shape();
  this.shape_109.graphics.f().s("#000000").ss(2,1).p("AhfkRQBfgMBzAyQCtBKA0C0QAMAmgDA4QgEBHgfAjQggAjhQAPQhBALhJgFQitgNg+hDQhJhPgcgDQgugHgLg4QgQgzgDghQgGg6Adg7QAeg8BSghQA0gVBCgIg");
  this.shape_109.setTransform(165.3,27.7);

  this.shape_110 = new cjs.Shape();
  this.shape_110.graphics.f("#2CA38E").s().p("ABAETQitgNg+hDQhJhPgcgDQgugHgLg4QgQgzgDghQgGg6Adg7QAeg8BSghQA0gVBCgIQBfgMBzAyQCtBKA0C0QAMAmgDA4QgEBHgfAjQggAjhQAPQgsAHgwAAQgWAAgYgBg");
  this.shape_110.setTransform(165.3,27.7);

  this.shape_111 = new cjs.Shape();
  this.shape_111.graphics.f().s("#000000").ss(2,1).p("AAkALQgsgGgbgP");
  this.shape_111.setTransform(141,237.8);

  this.shape_112 = new cjs.Shape();
  this.shape_112.graphics.f().s("#000000").ss(2,1).p("AhAgPIAHAJQAKAJANAGQAnAUA8ge");
  this.shape_112.setTransform(100.5,216.4);

  this.shape_113 = new cjs.Shape();
  this.shape_113.graphics.f().s("#000000").ss(2.3,1).p("AiugEICEgNQCQgEBJAn");
  this.shape_113.setTransform(44.8,154.6);

  this.shape_114 = new cjs.Shape();
  this.shape_114.graphics.f().s("#000000").ss(2.3,1).p("AiugJICEgJQCRgBBIAn");
  this.shape_114.setTransform(47.8,141.4);

  this.shape_115 = new cjs.Shape();
  this.shape_115.graphics.f().s("#000000").ss(2.3,1).p("ADwA8QiliVicAgQg9ANgtAlQgpAggLAn");
  this.shape_115.setTransform(124.3,72.3);

  this.shape_116 = new cjs.Shape();
  this.shape_116.graphics.f().s("#000000").ss(2.3,1).p("ADcg9QgZgEhBgiQhTgtgggNQiUg+g8BmQhJB8CABkQBAAyBNAY");
  this.shape_116.setTransform(128.7,99.3);

  this.shape_117 = new cjs.Shape();
  this.shape_117.graphics.f().s("#000000").ss(2.3,1).p("AhPgnIAEAQQAHASANALQArAtBcgP");
  this.shape_117.setTransform(42.2,191);

  this.shape_118 = new cjs.Shape();
  this.shape_118.graphics.f().s("#000000").ss(2.3,1).p("AA5BGQAOg4gogmQggghg6gM");
  this.shape_118.setTransform(166.7,210.3);

  this.shape_119 = new cjs.Shape();
  this.shape_119.graphics.f().s("#000000").ss(2.3,1).p("AC5CtQhTgDhZgtQiuhagXjP");
  this.shape_119.setTransform(140.4,206.5);

  this.shape_120 = new cjs.Shape();
  this.shape_120.graphics.f().s("#000000").ss(2.3,1).p("ADAAUQhMAZinAGQhigEgfgwQgJgQgCgSIAAgQ");
  this.shape_120.setTransform(160.7,198.4);

  this.shape_121 = new cjs.Shape();
  this.shape_121.graphics.f().s("#000000").ss(2.3,1).p("ACNgeQgvAfhUASQhSAShEgJ");
  this.shape_121.setTransform(176.5,191);

  this.shape_122 = new cjs.Shape();
  this.shape_122.graphics.f().s("#000000").ss(2.3,1).p("ABih1IgEBIQgMBNghAoQgRAUgcAOQg0Abgxgh");
  this.shape_122.setTransform(49.6,167.9);

  this.shape_123 = new cjs.Shape();
  this.shape_123.graphics.f().s("#000000").ss(2.3,1).p("AgpgGQAcAUAdgJQAQgEAKgH");
  this.shape_123.setTransform(182.2,87.4);

  this.shape_124 = new cjs.Shape();
  this.shape_124.graphics.f().s("#000000").ss(2.3,1).p("ABagBQgXgahEALQhFAMgTAY");
  this.shape_124.setTransform(187.5,102.2);

  this.shape_125 = new cjs.Shape();
  this.shape_125.graphics.f().s("#000000").ss(2.3,1).p("ACXAAQgeg3hiAQQhcAQhRBD");
  this.shape_125.setTransform(187,125.2);

  this.shape_126 = new cjs.Shape();
  this.shape_126.graphics.f().s("#000000").ss(2.3,1).p("AiDhFIEAA6IAPALQAOAUgHAhQgDANg3gBQhdgDgFABIhYAGIgrhUIgIgmQgBgHAFgFQAGgFAHABg");
  this.shape_126.setTransform(118.6,245.8);

  this.shape_127 = new cjs.Shape();
  this.shape_127.graphics.f("#000000").s().p("AiMgOIgIgmQgBgIAFgFQAGgFAHACIEAA6IAPALQAOAUgHAhQgDAMg3gBIhigCIhYAHg");
  this.shape_127.setTransform(118.6,245.8);

  this.shape_128 = new cjs.Shape();
  this.shape_128.graphics.f().s("#000000").ss(2.3,1).p("AgaAhIAXgQQAWgTAIge");
  this.shape_128.setTransform(199,183.7);

  this.shape_129 = new cjs.Shape();
  this.shape_129.graphics.f().s("#000000").ss(2.3,1).p("AAUg6QgTARgNAWQgfApASAWQARAWAWgJQALgEAIgJ");
  this.shape_129.setTransform(204.4,175.8);

  this.shape_130 = new cjs.Shape();
  this.shape_130.graphics.f().s("#000000").ss(2.3,1).p("AAMg4IAGAoQgBAsgiAd");
  this.shape_130.setTransform(206.2,128);

  this.shape_131 = new cjs.Shape();
  this.shape_131.graphics.f().s("#000000").ss(2.3,1).p("AAqhYIACAXQABAbgFAZQgPBOhEAY");
  this.shape_131.setTransform(205.3,153.1);

  this.shape_132 = new cjs.Shape();
  this.shape_132.graphics.f().s("#000000").ss(2.3,1).p("Ag5AoIAmgPQAqgXAjgp");
  this.shape_132.setTransform(216.5,158.1);

  this.shape_133 = new cjs.Shape();
  this.shape_133.graphics.f().s("#000000").ss(2.3,1).p("AgGh5QATAwgIA6QgLBPAGA5");
  this.shape_133.setTransform(222.4,141.9);

  this.shape_134 = new cjs.Shape();
  this.shape_134.graphics.f().s("#000000").ss(2.3,1).p("AAvhWQgMAxgiAZQgkAagEAKQgNAcAKARQALASAfAA");
  this.shape_134.setTransform(228.1,115.9);

  this.shape_135 = new cjs.Shape();
  this.shape_135.graphics.f().s("#000000").ss(2.3,1).p("AAbguIACApQgIApgxAL");
  this.shape_135.setTransform(183.3,44.8);

  this.shape_136 = new cjs.Shape();
  this.shape_136.graphics.f().s("#000000").ss(2.3,1).p("AgwgdIANgEQAQgDAPADQAsAIAJA8");
  this.shape_136.setTransform(199.4,89);

  this.shape_137 = new cjs.Shape();
  this.shape_137.graphics.f().s("#000000").ss(2.3,1).p("AhSiQIAogCQArAFAYAjQAkA2ABBbQAAAwACAOQAEAeAPAQ");
  this.shape_137.setTransform(208.7,123.7);

  this.shape_138 = new cjs.Shape();
  this.shape_138.graphics.f().s("#000000").ss(2.3,1).p("AgsAiIAkgHQAlgQAQgs");
  this.shape_138.setTransform(221.7,104.3);

  this.shape_139 = new cjs.Shape();
  this.shape_139.graphics.f().s("#000000").ss(2.3,1).p("AhGg1QAsBXArAQQAXAJANgKQATgSgBgrIgFgp");
  this.shape_139.setTransform(220.8,95.9);

  this.shape_140 = new cjs.Shape();
  this.shape_140.graphics.f().s("#000000").ss(2.3,1).p("AiPk6IAsAeQAuAjAGAbQAGAVgGA2QACAyAuAcQATALAiANQAdALAMAJQAlAZAKBdQAJBcgdBLQgOAkgQAT");
  this.shape_140.setTransform(199.2,78.4);

  this.shape_141 = new cjs.Shape();
  this.shape_141.graphics.f().s("#000000").ss(2.3,1).p("AAwhXQgBAXAJBLQAEBEgZAIQgVAGgUgoQgagvgYgG");
  this.shape_141.setTransform(220.5,75.6);

  this.shape_142 = new cjs.Shape();
  this.shape_142.graphics.f().s("#000000").ss(2.3,1).p("AjsgeQgHgXAFgcQAKg4A6gcQA/gfBGAoQA4AhAeA5QAQAgA9CDQA9BuAngkQAggdglgpIgqgk");
  this.shape_142.setTransform(194.4,49.5);

  this.shape_143 = new cjs.Shape();
  this.shape_143.graphics.f().s("#000000").ss(2.3,1).p("AAJApQgHgJgDgOQgMgbAHgf");
  this.shape_143.setTransform(207.5,40.6);

  this.shape_144 = new cjs.Shape();
  this.shape_144.graphics.f().s("#000000").ss(2.3,1).p("ABMggQgKAXgYARQguAmhHgV");
  this.shape_144.setTransform(163,31.8);

  this.shape_145 = new cjs.Shape();
  this.shape_145.graphics.f().s("#000000").ss(2.3,1).p("AiCgYIAPAMQAUAMAaAKQBUAeB0gb");
  this.shape_145.setTransform(176,19.8);

  this.shape_146 = new cjs.Shape();
  this.shape_146.graphics.f().s("#000000").ss(2.3,1).p("Ag0glIAvALQAvATALAs");
  this.shape_146.setTransform(151.2,21);

  this.shape_147 = new cjs.Shape();
  this.shape_147.graphics.f().s("#000000").ss(2.3,1).p("AhygOQAJA1AlAYQAiAWAqgLQAsgLAdgnQAhgoABg9");
  this.shape_147.setTransform(38.4,118.8);

  this.shape_148 = new cjs.Shape();
  this.shape_148.graphics.f().s("#000000").ss(2.3,1).p("AB0geQgLASgjAPQhFAih0gI");
  this.shape_148.setTransform(190.1,153.5);

  this.shape_149 = new cjs.Shape();
  this.shape_149.graphics.f().s("#000000").ss(2.3,1).p("AiiAXIBAgSQBNgSBCgOQA8gMAjAjQARAQAGAU");
  this.shape_149.setTransform(180.3,167.5);

  this.shape_150 = new cjs.Shape();
  this.shape_150.graphics.f().s("#000000").ss(2.3,1).p("ABUAQQgiALglAAQhJgBgXg0");
  this.shape_150.setTransform(99.2,237.7);

  this.shape_151 = new cjs.Shape();
  this.shape_151.graphics.f().s("#000000").ss(2.3,1).p("ACBBAQh1AQhRhIQgagVgTgcIgOgY");
  this.shape_151.setTransform(112.6,214.2);

  this.shape_152 = new cjs.Shape();
  this.shape_152.graphics.f().s("#000000").ss(2.3,1).p("AC5CsQhaAsh3AJQieALgYhZQgVhPAohIQAagxAogeQAqggBhgqQBlgrBfgZ");
  this.shape_152.setTransform(167.5,161);

  this.shape_153 = new cjs.Shape();
  this.shape_153.graphics.f().s("#000000").ss(2.3,1).p("AEIArQhnBWihgwQiWguhxiE");
  this.shape_153.setTransform(119.6,170.9);

  this.shape_154 = new cjs.Shape();
  this.shape_154.graphics.f().s("#000000").ss(2.3,1).p("ABhiFIARAdQASAjAJAhQAcBphMAwQg5AjhhgnQgegNgggSIgZgQ");
  this.shape_154.setTransform(144.1,124.3);

  this.shape_155 = new cjs.Shape();
  this.shape_155.graphics.f().s("#000000").ss(2.3,1).p("Ai+CwIA3AWQBDAYA8AGQC7AXAoiXQAQg8geg+QgghDhJgvQhkhEh6gTQgngGgjgBIgcAB");
  this.shape_155.setTransform(91.4,130.8);

  this.shape_156 = new cjs.Shape();
  this.shape_156.graphics.f().s("#000000").ss(2.3,1).p("AB+BLQh6gThLhBQgYgVgRgYIgMgU");
  this.shape_156.setTransform(120.5,158.3);

  this.shape_157 = new cjs.Shape();
  this.shape_157.graphics.f().s("#000000").ss(2.3,1).p("ABvA3QglgCgugOQhbgdgvhA");
  this.shape_157.setTransform(125.6,143.5);

  this.shape_158 = new cjs.Shape();
  this.shape_158.graphics.f().s("#000000").ss(2.3,1).p("ACiAAQgygdg6gUQhDgZgnAGQhJAKgZBAQgNAhACAf");
  this.shape_158.setTransform(129.2,124.2);

  this.shape_159 = new cjs.Shape();
  this.shape_159.graphics.f().s("#000000").ss(2.3,1).p("Ag3jzQg0BAATBGQANAyA7BIQBKBfAMAWQAmBAgWAy");
  this.shape_159.setTransform(153.6,63);

  this.shape_160 = new cjs.Shape();
  this.shape_160.graphics.f().s("#000000").ss(2.3,1).p("ABdkeIAcAZQAiAfAcAiQBaBtAABXQgBBjgbA4QgNAagqAsQhRBWidghQiDgchdhN");
  this.shape_160.setTransform(150.8,82.2);

  this.shape_161 = new cjs.Shape();
  this.shape_161.graphics.f().s("#000000").ss(2.3,1).p("AlAuNIA3ATQBCAeA2A5IAiAUQAqAbAmAiQB2BuAgCOIAVAVQAZAbAUAiQBBBsgHCDIAlBFQAiBTgPBPIAHAUQAIAZAEAdQAMBbgjBWIgBBLQgJBVgqAtIgGA/QgNBHgoAkIAEAPQAEAUgEAVQgKBIhIBK");
  this.shape_161.setTransform(172.2,117);

  this.shape_162 = new cjs.Shape();
  this.shape_162.graphics.f().s("#000000").ss(2.3,1).p("ABGjWQgQAPgUAZQgnAwgaA0QhTCjBkB+");
  this.shape_162.setTransform(94.1,79.3);

  this.shape_163 = new cjs.Shape();
  this.shape_163.graphics.f().s("#000000").ss(2.3,1).p("AhEgdQA2gIAuAiQAYAQANAT");
  this.shape_163.setTransform(72.3,61.2);

  this.shape_164 = new cjs.Shape();
  this.shape_164.graphics.f().s("#000000").ss(2.3,1).p("Ah5i0Qg9BUAJBQQAHBGA7A1QA3AyBNARQBQASBHgZ");
  this.shape_164.setTransform(67.3,203.5);

  this.shape_165 = new cjs.Shape();
  this.shape_165.graphics.f().s("#000000").ss(2.3,1).p("AATgyIAFAQQAEATAAAPQgDAzg0AA");
  this.shape_165.setTransform(70.3,145.6);

  this.shape_166 = new cjs.Shape();
  this.shape_166.graphics.f().s("#000000").ss(2.3,1).p("AA8lRQANBfgrA1QgeAmhKAgQheAogWAPQg5AogGBCQgIBPAvAnQAiAeBaAUQCaAjAOAEQBpAgBIA5");
  this.shape_166.setTransform(75.6,103.5);

  this.shape_167 = new cjs.Shape();
  this.shape_167.graphics.f().s("#000000").ss(2.3,1).p("AAwiRQgjAXgRAUQgyA1AIBGQAJBLBDAy");
  this.shape_167.setTransform(115.9,43.1);

  this.shape_168 = new cjs.Shape();
  this.shape_168.graphics.f().s("#000000").ss(2.3,1).p("AgRiWIALAcQALAjAGAlQAVBzgsBW");
  this.shape_168.setTransform(32,182.8);

  this.shape_169 = new cjs.Shape();
  this.shape_169.graphics.f().s("#000000").ss(2.3,1).p("Ag1vyQg6gJhDAaQiHA2gwCyQgtgNg2AAQhrgBgoA+QgtAKgzAiQhlBGgbB+QgrAegqA6QhUB2AHCRQgIAJgKARQgWAjgNApQgtCBAuCSIgOAwQgQA8gGA9QgTDABYB3IACAgQAGAmARAkQA2ByCSAtIASAUQAYAZAdAUQBbBABkgIIApATQA1AWA0APQCpAtBtgzIAjACQArACAlgEQB+gNArhBIApADQAxAAAogUQBEghAkg4QAZgnAUhIIAogfQAsgkAUgaIAfgGQAmgKAigXQBuhIAkimIAYgWQAcgbAWgeQBKhhgDhWQAugzAlhUQBIimgxinQARg1gChNQgCiahYh3QgCg7gZhDQgwiHhwgqQgGghgZgkQgzhJhdgMQg2g4hRghQijhCiHB0QgTAHgQAOQghAcAKAmQgbgHglgBQhKgBg1Ajg");
  this.shape_169.setTransform(126.2,129.6);

  this.shape_170 = new cjs.Shape();
  this.shape_170.graphics.f("#FDB8BC").s().p("Al7SZQg0gPg1gWIgpgTQhkAIhbhAQgdgUgYgZIgSgUQiSgtg2hyQgRgkgGgmIgCggQhYh3ATjAQAGg9AQg8IAOgwQguiSAtiBQANgpAWgjQAKgRAIgJQgHiRBUh2QAqg6ArgeQAbh+BlhGQAzgiAtgKQAog+BrABQA2AAAtANQAwiyCHg2QBDgaA6AJQA1gjBKABQAlABAbAHQgKgmAhgcQAQgOATgHQCHh0CjBCQBRAhA2A4QBdAMAzBJQAZAkAGAhQBwAqAwCHQAZBDACA7QBYB3ACCaQACBNgRA1QAxCnhICmQglBUguAzQADBWhKBhQgWAegcAbIgYAWQgkClhuBJQgjAXglAKIgfAGQgUAagsAkIgoAfQgQA8gpA5QgtA/gvAUQgwAUgtAAIglgDQgrBBh+ANQglAEgrgCIgjgCQg6AbhLAAQhCAAhPgVg");
  this.shape_170.setTransform(126.2,129.6);

  this.shape_171 = new cjs.Shape();
  this.shape_171.graphics.f("#000000").s().p("AglAaQABgWAVgRQARgSAXgEQAKgCACAKQADAKgJABQgRADgOAMQgRAMAAAPQgBAKgKAAQgKAAABgKg");
  this.shape_171.setTransform(195.9,315.5);

  this.shape_172 = new cjs.Shape();
  this.shape_172.graphics.f("#000000").s().p("AgGAhQAAgLgCgWQgDgVAAgLQAAgKAKAAQAIAAAAAKIADAgQACAWAAALQAAAKgKAAQgIAAAAgKg");
  this.shape_172.setTransform(193.4,324);

  this.shape_173 = new cjs.Shape();
  this.shape_173.graphics.f().s("#000000").ss(2).p("ABCAGIh8ATQgJABgDgPQAAgHADgEQADgEAGgBIBugSQAGgBAFAEQAFAEABAGQABAFABAFQAAAFgFABg");
  this.shape_173.setTransform(201.3,310.6);

  this.shape_174 = new cjs.Shape();
  this.shape_174.graphics.f("#FFFFFF").s().p("AhGALQAAgHADgEQADgEAGgBIBugSQAGgBAFAEQAFAEABAGIACAKQAAAFgFABIh8ATIgCAAQgIAAgCgOg");
  this.shape_174.setTransform(201.3,310.6);

  this.shape_175 = new cjs.Shape();
  this.shape_175.graphics.f().s("#000000").ss(2).p("ACUAZQgfAEgdAIIgFACQgRgRgbABQgjACgcAQQgYAMgZAYQgHAHgRAAQgUgCgJABQgTABAAgLIgDg1QAAgYADgLQAFgQAQgLQAVgNAhgLQAngOAfgCQAsgDAkAJQAhAJAOAKQATAOAAAag");
  this.shape_175.setTransform(202,319.3);

  this.shape_176 = new cjs.Shape();
  this.shape_176.graphics.f("#1073B9").s().p("Ah+BTQgSABAAgLIgEg1QAAgYADgLQAFgQARgLQAVgNAhgLQAngOAfgCQAsgDAjAJQAiAJAOAKQASAOAAAaIADAqQgfAEgeAIIgEACQgRgRgbABQgkACgbAQQgYAMgZAYQgIAHgRAAQgTgCgKABg");
  this.shape_176.setTransform(201.9,319.3);

  this.shape_177 = new cjs.Shape();
  this.shape_177.graphics.f().s("#000000").ss(2).p("ABSJcQhyj8hDnpQgVidgOijQgHhcgDg2IBDgDQAAABAJCDQANCgAVCaQBAHsBwD0g");
  this.shape_177.setTransform(202.1,385.9);

  this.shape_178 = new cjs.Shape();
  this.shape_178.graphics.f("#1073B9").s().p("AhhiHQgWidgNijQgIhcgCg2IBCgEIAJCEQAOChAUCZQBAHtBxD0Ig9AcQhyj8hCnpg");
  this.shape_178.setTransform(202,385.8);

  this.shape_179 = new cjs.Shape();
  this.shape_179.graphics.f().s("#000000").ss(2).p("AAvQZQgSACgZgBQhvgGhkhfQhfhahIifQiVlKgEnNQgDm9CBkGQB+j/DNALQAZACASAEQDFApCDESQCeFLAHJJQADFDhpDyQh2EOjHATgAJjCKQgFnjiQlnQizm9lIgSQgngCghAEIAAAAQgfAEgeAIIgEACQjpBHhxFqQhiE4ASGfQAUHBCZE+QC0F4EsAQQB8AHBrhMQBnhKBNiNQCgkngFnDg");
  this.shape_179.setTransform(230.3,438.5);

  this.shape_180 = new cjs.Shape();
  this.shape_180.graphics.f("#666666").s().p("AAtSQQksgQi0l4QiZk+gUnBQgSmfBik4QBxlqDphHIAEgCQAegIAfgEIAAAAQAhgEAnACQFIASCzG9QCQFnAFHjQAFHDigEnQhNCNhnBKQhiBGhwAAIgVgBgAmRseQiBEGADG9QAEHNCVFKQBICfBfBaQBkBfBvAGQAZABASgCQDHgTB2kOQBpjygDlDQgHpJielLQiDkSjFgpQgSgEgZgCIgRAAQjBAAh5D0g");
  this.shape_180.setTransform(230.3,438.5);

  this.shape_181 = new cjs.Shape();
  this.shape_181.graphics.f().s("#000000").ss(2).p("ACAASIkUAoIgMhMIEVgoQAQgCANAKQANAKACAQQADAQgKALQgKANgQACg");
  this.shape_181.setTransform(230.6,443.8);

  this.shape_182 = new cjs.Shape();
  this.shape_182.graphics.f("#FFFFFF").s().p("AiggRIEUgoQAQgCANAJQAOAKACAQQACAQgJALQgKAOgQACIkVAng");
  this.shape_182.setTransform(230.6,443.7);

  this.shape_183 = new cjs.Shape();
  this.shape_183.graphics.f().s("#000000").ss(2).p("AEfQVQgRACgagBQhwgGhkheQhdhahJigQiVlKgDnNQgEm9CCkFQB+kADLAMQAUAAAXAFQi9AThuD8Qh0ECADGlQADG2CIFDQCJFKDTAsg");
  this.shape_183.setTransform(206.2,439.5);

  this.shape_184 = new cjs.Shape();
  this.shape_184.graphics.f("#E6E6E6").s().p("AD0QWQhwgGhkheQhdhahJigQiVlKgDnNQgEm9CCkFQB+kADLAMQAUAAAXAFQi9AThuD8Qh0ECADGlQADG2CIFDQCJFKDTAsQgLACgQAAIgQgBg");
  this.shape_184.setTransform(206.2,439.5);

  this.shape_185 = new cjs.Shape();
  this.shape_185.graphics.f().s("#000000").ss(2).p("AAvAAQAAAUgOANQgNAPgUAAQgTAAgOgPQgOgNAAgUQAAgTAOgNQAOgPATAAQAUAAANAPQAOANAAATg");
  this.shape_185.setTransform(245.2,441.3);

  this.shape_186 = new cjs.Shape();
  this.shape_186.graphics.f("#FFFFFF").s().p("AggAhQgPgOAAgTQAAgTAPgNQANgPATAAQATAAAOAPQAOANAAATQAAATgOAOQgOAOgTAAQgTAAgNgOg");
  this.shape_186.setTransform(245.2,441.3);

  this.shape_187 = new cjs.Shape();
  this.shape_187.graphics.f().s("#000000").ss(2).p("AgqAOIgDgOQgBgKAGgHQAFgIAKgBIAkgFQANgCAKAHQAKAIACANQACALgIAKQgHAKgNACIglAFQgJABgIgFQgHgGgBgJg");
  this.shape_187.setTransform(247.4,440.6);

  this.shape_188 = new cjs.Shape();
  this.shape_188.graphics.f("#FFFFFF").s().p("AgiAdQgHgGgBgJIgDgOQgBgKAGgHQAFgIAKgBIAkgFQANgCAKAHQAKAIACANQACALgIAKQgHAKgNACIglAFIgEAAQgHAAgGgEg");
  this.shape_188.setTransform(247.4,440.6);

  this.shape_189 = new cjs.Shape();
  this.shape_189.graphics.f("#000000").s().p("AgiBFQg5gRgYgNQgcgOglgfQgtgpgQgLQgHgGAFgIQAFgJAIAFQARAMAiAgQAgAeAUALQARALAZAKIAsAQQA+AVBMgRQA4gMBOgmQAIgDAFAHQAFAJgIAEQhPAmg4AOQgnAJgjAAQgiAAgggJg");
  this.shape_189.setTransform(83.2,236);

  this.shape_190 = new cjs.Shape();
  this.shape_190.graphics.f("#FD7DAC").s().p("AARBEQgbgCgggLQghgMgPgFQgfgJg1grQgxgugMgHIGBAOIBQASIAGArQh6A8hTAAIgOAAg");
  this.shape_190.setTransform(83.2,236.1);

  this.shape_191 = new cjs.Shape();
  this.shape_191.graphics.f().s("#000000").ss(2.7).p("AgIggIAKASQAJAUgLAV");
  this.shape_191.setTransform(33.7,393.6);

  this.shape_192 = new cjs.Shape();
  this.shape_192.graphics.f("#FFFFFF").s().p("AgGgdIAKARQAJAUgMAWg");
  this.shape_192.setTransform(33.5,393.3);

  this.shape_193 = new cjs.Shape();
  this.shape_193.graphics.f().s("#000000").ss(2.7).p("AAugnQAAAEgCAEQgCAFgEAFQgHAHgLAAIgpAAQgXAAAAAWQgBAXAXABIAFAAQAqAAAPgjIAEgc");
  this.shape_193.setTransform(30.2,400.7);

  this.shape_194 = new cjs.Shape();
  this.shape_194.graphics.f("#FFFFFF").s().p("AgVAgQgXgBAAgXQABgWAXAAIAoAAQALAAAIgHQAEgFACgFIgFAcQgOAjgqAAg");
  this.shape_194.setTransform(30.2,400.7);

  this.shape_195 = new cjs.Shape();
  this.shape_195.graphics.f().s("#000000").ss(2.7).p("AgqANIgDgOQgBgJAGgIQAFgHAKgBIAkgGQANgCAKAIQAKAIACAMQACALgIAKQgHAKgNACIglAGQgJABgIgGQgHgFgBgKg");
  this.shape_195.setTransform(34.6,393.3);

  this.shape_196 = new cjs.Shape();
  this.shape_196.graphics.f("#FFFFFF").s().p("AgiAcQgHgFgBgKIgDgOQgBgJAGgIQAFgHAKgBIAkgGQANgCAKAIQAKAIACAMQACALgIAKQgHAKgNACIglAGIgDAAQgIAAgGgFg");
  this.shape_196.setTransform(34.6,393.3);

  this.shape_197 = new cjs.Shape();
  this.shape_197.graphics.f().s("#000000").ss(2).p("ABrAAQAAACgDAFQgEAFAAACQAAADADAFQADAFgBADQAAACgEAEQgEAFgBACQAAADACAFQACAGAAACQgBADgFADQgEAEgBACQgBADABAGQACAFgBADQgBACgFADQgGADgBACQgBADAAAFQABAGgCACQgBADgGACQgGACgBABQgCACgBAGQgBAGgCACQgCABgGABQgGAAgCABQgCACgCAFQgDAFgCABQgDABgFgBQgHgCgCABQgCAAgFAEQgEAEgCAAQgBAAgFgEQgEgEgDAAQgCgBgGACQgFABgDgBQgCgBgDgFQgDgFgCgCQgCgBgGAAQgGgBgCgCQgCgBAAgGQgCgGgBgCQgCgBgFgCQgGgCgBgDQgCgCAAgGQABgGgBgCQgBgCgGgDQgFgDgBgCQgBgDABgFQABgGAAgCQgBgDgFgDQgEgEgBgDQgBgCADgGQACgFgBgDQAAgCgEgEQgEgFgBgCQAAgDADgFQADgFAAgDQAAgCgEgFQgDgFAAgCQAAgBADgFQAEgFAAgCQAAgDgDgFQgDgFAAgDQABgCAEgFQAEgEAAgCQABgDgCgFQgDgGABgCQABgDAEgEQAFgEABgCQAAgCgBgGQgBgGABgCQABgDAFgCQAGgDABgCQABgCgBgHQAAgGACgCQABgCAGgCQAFgCACgBQABgCACgGQABgGACgCQACgCAFAAQAHgBABgBQACgBADgFQADgGACgBQADgBAFACQAGACACgBQADAAAEgEQAFgEABAAQACAAAEAEQAFAEACAAQADABAGgCQAFgCADABQACABADAGQADAFACABQACACAGAAQAFAAACACQACACABAGQABAGACACQABABAGACQAGACABACQACACgBAGQAAAHABACQABACAGADQAFADABACQABACgCAGQgBAGABACQABACAEAEQAFAEABADQAAACgCAGQgCAFAAADQABACAEAEQAEAFAAACQABADgDAFQgDAFAAADQAAACAEAFQADAFAAABg");
  this.shape_197.setTransform(39.5,392.5);

  this.shape_198 = new cjs.Shape();
  this.shape_198.graphics.f("#E6E6E6").s().p("AgGCdQgEgEgDAAQgCgBgGACQgFABgDgBQgCgBgDgFQgDgFgCgCIgIgBQgGgBgCgCQgCgBAAgGIgDgIIgHgDQgGgCgBgDQgCgCAAgGQABgGgBgCQgBgCgGgDQgFgDgBgCQgBgDABgFIABgIQgBgDgFgDQgEgEgBgDQgBgCADgGQACgFgBgDQAAgCgEgEQgEgFgBgCQAAgDADgFQADgFAAgDQAAgCgEgFQgDgFAAgCQAAgBADgFQAEgFAAgCQAAgDgDgFIgDgIQABgCAEgFIAEgGQABgDgCgFQgDgGABgCQABgDAEgEQAFgEABgCIgBgIQgBgGABgCQABgDAFgCQAGgDABgCQABgCgBgHQAAgGACgCQABgCAGgCIAHgDIADgIQABgGACgCQACgCAFAAIAIgCQACgBADgFQADgGACgBQADgBAFACQAGACACgBQADAAAEgEQAFgEABAAQACAAAEAEIAHAEQADABAGgCQAFgCADABQACABADAGQADAFACABQACACAGAAQAFAAACACQACACABAGQABAGACACIAHADQAGACABACQACACgBAGQAAAHABACQABACAGADQAFADABACQABACgCAGIAAAIIAFAGQAFAEABADQAAACgCAGIgCAIIAFAGQAEAFAAACQABADgDAFQgDAFAAADQAAACAEAFQADAFAAABQAAACgDAFQgEAFAAACIADAIQADAFgBADQAAACgEAEQgEAFgBACIACAIQACAGAAACQgBADgFADIgFAGIAAAJQACAFgBADQgBACgFADQgGADgBACIgBAIQABAGgCACQgBADgGACIgHADQgCACgBAGQgBAGgCACQgCABgGABIgIABQgCACgCAFQgDAFgCABQgDABgFgBIgJgBIgHAEQgEAEgCAAQgBAAgFgEg");
  this.shape_198.setTransform(39.5,392.5);

  this.shape_199 = new cjs.Shape();
  this.shape_199.graphics.f().s("#000000").ss(2.7).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgSAOgPQAOgOATAAQAUAAAOAOQAOAPAAASg");
  this.shape_199.setTransform(36.8,393);

  this.shape_200 = new cjs.Shape();
  this.shape_200.graphics.f("#FFFFFF").s().p("AggAiQgPgOAAgUQAAgSAPgPQANgOATAAQATAAAOAOQAOAPABASQgBAUgOAOQgOAOgTAAQgTAAgNgOg");
  this.shape_200.setTransform(36.8,393);

  this.shape_201 = new cjs.Shape();
  this.shape_201.graphics.f().s("#000000").ss(2).p("ADZAAQAAAFgHAKQgHAJgBAFQAAAFAGALQAGAKgBAFQgBAFgIAJQgIAJgBAFQgBAFAEALQAFALgCAFQgBAFgJAHQgKAIgBAFQgCAEADAMQACAMgCAEQgCAFgKAGQgLAGgCAEQgCAFAAAMQABAMgDAEQgDAEgLAEQgMAEgDAEQgDADgCAMQgCAMgEADQgEAEgLABQgNABgEACQgEADgGALQgFAKgFACQgFACgLgDQgMgDgEABQgEABgKAIQgJAHgFAAQgEAAgIgHQgKgIgFgBQgEgBgMADQgLADgFgCQgFgCgFgKQgGgLgEgDQgEgCgMgBQgMgBgEgEQgEgDgCgMQgCgMgDgDQgDgEgMgEQgLgEgDgEQgDgEAAgMQABgMgCgFQgCgEgLgGQgKgGgCgFQgCgEADgMQACgLgCgFQgBgFgJgIQgKgHgBgFQgBgFAEgLQAEgLgBgFQgBgFgIgJQgIgJgBgFQAAgFAGgKQAFgLAAgFQAAgFgIgJQgGgKAAgFQAAgEAGgJQAIgKAAgFQAAgFgFgLQgGgKAAgFQABgFAIgJQAIgJABgFQABgEgEgMQgEgLABgFQABgFAKgHQAJgIABgEQACgFgCgMQgDgMACgEQACgFAKgGQALgGACgEQACgFgBgMQAAgMADgEQADgEALgEQAMgEADgEQADgDACgMQACgMAEgDQAEgEAMgBQAMgBAEgCQAEgDAGgLQAFgKAFgCQAFgCALADQAMADAEgBQAFgBAKgIQAIgHAEAAQAFAAAJAHQAJAIAFABQAEABAMgDQALgDAFACQAFACAFAKQAGALAEADQAEACANABQALABAEAEQAEADACAMQACAMADADQADAEAMAEQALAEADAEQADAEgBAMQAAAMACAFQACAEALAGQAKAGACAFQACAEgCAMQgDAMACAFQABAEAKAIQAJAHABAFQACAFgFALQgEAMABAEQABAFAIAJQAIAJABAFQABAFgGAKQgGALAAAFQABAFAHAKQAHAJAAAEg");
  this.shape_201.setTransform(116.8,436.3);

  this.shape_202 = new cjs.Shape();
  this.shape_202.graphics.f("#E6E6E6").s().p("AgNE9QgJgIgFgBQgEgBgMADQgLADgGgCQgEgCgGgKQgFgLgFgDQgDgCgNgBQgLgBgEgEQgEgDgCgMQgCgMgEgDQgCgEgMgEQgLgEgDgEQgDgEABgMQAAgMgCgFQgDgEgKgGQgKgGgCgFQgCgEADgMQACgLgCgFQgCgFgIgIQgKgHgBgFQgBgFAEgLQAEgLgBgFQgBgFgIgJQgIgJgBgFQgBgFAHgKQAFgLgBgFQAAgFgGgJQgIgKABgFQgBgEAIgJQAGgKAAgFQABgFgFgLQgHgKABgFQABgFAIgJQAIgJABgFQABgEgEgMQgEgLABgFQABgFAKgHQAIgIACgEQACgFgCgMQgDgMACgEQACgFAKgGQAKgGADgEQACgFAAgMQgBgMADgEQADgEALgEQAMgEACgEQAEgDACgMQACgMAEgDQAEgEALgBQANgBADgCQAFgDAFgLQAGgKAEgCQAGgCALADQAMADAEgBQAFgBAJgIQAJgHAEAAQAFAAAJAHQAJAIAEABQAFABAMgDQALgDAFACQAFACAFAKQAGALAEADQAEACANABQALABAEAEQADADACAMQADAMADADQADAEALAEQAMAEADAEQADAEgBAMQAAAMACAFQACAEALAGQAKAGACAFQACAEgDAMQgCAMABAFQACAEAJAIQAKAHABAFQABAFgEALQgEAMABAEQABAFAIAJQAIAJABAFQABAFgHAKQgFALAAAFQABAFAGAKQAIAJgBAEQABAFgIAKQgGAJgBAFQAAAFAFALQAHAKgBAFQgBAFgIAJQgIAJgBAFQgBAFAEALQAEALgBAFQgBAFgKAHQgJAIgCAFQgBAEACAMQADAMgCAEQgCAFgKAGQgLAGgCAEQgCAFAAAMQABAMgDAEQgDAEgMAEQgLAEgDAEQgDADgDAMQgCAMgDADQgEAEgLABQgNABgEACQgEADgGALQgFAKgFACQgFACgLgDQgMgDgFABQgEABgJAIQgJAHgFAAQgEAAgJgHg");
  this.shape_202.setTransform(116.8,436.3);

  this.instance_4 = new lib.Path_20();
  this.instance_4.parent = this;
  this.instance_4.setTransform(27.6,375.2);

  this.shape_203 = new cjs.Shape();
  this.shape_203.graphics.f().s("#FC0D1B").ss(2).p("AgBAAIADAA");
  this.shape_203.setTransform(46.9,465.3);

  this.shape_204 = new cjs.Shape();
  this.shape_204.graphics.f().s("#000000").ss(2).p("AGaHIQg9gFiNhZQiFhViUh8QiaiAhkhtQhvh8gHg+QgHhKAYg1QAag6AyAAQApAAGCCMQDBBGC6BG");
  this.shape_204.setTransform(74.4,422.5);

  this.shape_205 = new cjs.Shape();
  this.shape_205.graphics.f().s("#FC0D1B").ss(2).p("AAPAAQAAAIgFAGQgEAGgGAAQgFAAgFgGQgEgGAAgIQAAgHAEgGQAFgGAFAAQAGAAAEAGQAFAGAAAHg");
  this.shape_205.setTransform(108.7,440.2);

  this.shape_206 = new cjs.Shape();
  this.shape_206.graphics.f().s("#000000").ss(2).p("AgPD2IhFncIBkgPIBFHcg");
  this.shape_206.setTransform(197.4,287.1);

  this.shape_207 = new cjs.Shape();
  this.shape_207.graphics.f("#1073B9").s().p("AhUjmIBkgPIBFHcIhkAPg");
  this.shape_207.setTransform(197.4,287.1);

  this.shape_208 = new cjs.Shape();
  this.shape_208.graphics.f("#FFFFFF").s().p("AhlCwIAIgQIAVgpQALgWAVgjIA5heIASghIAPgeIAzhRIABABIgIAQIg3BhQgOAWgFAJIg0BiQgQAegRAaIgjA2g");
  this.shape_208.setTransform(169.5,343.6);

  this.shape_209 = new cjs.Shape();
  this.shape_209.graphics.f().s("#000000").ss(2).p("AlnLlIhZgyIMo2XIBZAyg");
  this.shape_209.setTransform(158.6,367.5);

  this.shape_210 = new cjs.Shape();
  this.shape_210.graphics.f("#1073B9").s().p("AnAKzIMn2XIBaAyIsoWXg");
  this.shape_210.setTransform(158.6,367.5);

  this.shape_211 = new cjs.Shape();
  this.shape_211.graphics.f("#FFFFFF").s().p("ACRAgQgggEglgFIhMgQIiSgbIhCgOIABgBIBDAIICRAVIBOAJQAcAEAoAJQAnAKAaAIIAAACQgbAAgogEg");
  this.shape_211.setTransform(160.7,276.1);

  this.shape_212 = new cjs.Shape();
  this.shape_212.graphics.f().s("#000000").ss(2).p("AIKCNIwli0IARhlIQmC0g");
  this.shape_212.setTransform(144.4,274.9);

  this.shape_213 = new cjs.Shape();
  this.shape_213.graphics.f("#1073B9").s().p("AobgnIAShlIQlC0IgSBlg");
  this.shape_213.setTransform(144.4,274.9);

  this.shape_214 = new cjs.Shape();
  this.shape_214.graphics.f().s("#000000").ss(2).p("AkQKNIgqgTIJL0GIAqATg");
  this.shape_214.setTransform(67.1,329.6);

  this.shape_215 = new cjs.Shape();
  this.shape_215.graphics.f("#1073B9").s().p("Ak6J6IJL0GIAqATIpLUGg");
  this.shape_215.setTransform(67.1,329.6);

  this.shape_216 = new cjs.Shape();
  this.shape_216.graphics.f().s("#000000").ss(2).p("AF9CZIsIkFIAPgsIMIEGg");
  this.shape_216.setTransform(76.5,407.2);

  this.shape_217 = new cjs.Shape();
  this.shape_217.graphics.f("#1073B9").s().p("AmLhsIAPgsIMIEGIgPArg");
  this.shape_217.setTransform(76.5,407.2);

  this.shape_218 = new cjs.Shape();
  this.shape_218.graphics.f("#000000").s().p("AgbArQgIgFAEgJQATgjAcgiQAGgHAIAHQAHAIgHAHQgaAagSAmQgDAFgEAAQgDAAgDgBg");
  this.shape_218.setTransform(159,285.4);

  this.shape_219 = new cjs.Shape();
  this.shape_219.graphics.f("#000000").s().p("AAOA3QgbgMgcggIgtg2QgGgIAHgHQAHgHAGAHIAxA7QAQASAMAJQAQALAUAEQAbAEACgWQABgKAKAAQAKAAgBAKQgDAbgZAIQgJACgIAAQgPAAgQgHg");
  this.shape_219.setTransform(162.1,426.9);

  this.shape_220 = new cjs.Shape();
  this.shape_220.graphics.f("#000000").s().p("AgQApQgMguAfgnQAHgHAHAHQAHAHgHAHQgXAeAHAkQADAJgIADIgEABQgGAAgCgIg");
  this.shape_220.setTransform(156.3,438);

  this.shape_221 = new cjs.Shape();
  this.shape_221.graphics.f("#000000").s().p("AgOAjQgHgHAIgGQALgKABgIQABgMgGgOQgEgJAJgFQAGgFAFAJQAKATgDAUQgCAPgPAOQgCADgEAAQgEAAgEgEg");
  this.shape_221.setTransform(152.7,397.4);

  this.shape_222 = new cjs.Shape();
  this.shape_222.graphics.f().s("#000000").ss(2).p("AC5BZImFiCIgIgsIGbCBQAIADAEAGQAFAHAAAIQgBALgJAHQgKAHgLgEg");
  this.shape_222.setTransform(144.5,443.6);

  this.shape_223 = new cjs.Shape();
  this.shape_223.graphics.f("#FFFFFF").s().p("AC4BXImGiCIgIgsIGbCBQAIADAFAGQAFAHgBAIQAAALgKAHQgGAEgGAAIgIgBg");
  this.shape_223.setTransform(144.7,443.8);

  this.shape_224 = new cjs.Shape();
  this.shape_224.graphics.f("#000000").s().p("AgcAHQgJgCADgHQACgKAKACQAXAFAZgCQAKAAAAAIQAAAKgKAAIgLAAQgUAAgXgEg");
  this.shape_224.setTransform(147.6,417.6);

  this.shape_225 = new cjs.Shape();
  this.shape_225.graphics.f("#000000").s().p("AAkAOIgkgCQgWgCgPgEQgJgDACgIQADgKAJADQAOAFATABIAjACQAKAAAAAIQAAAKgJAAIgBAAg");
  this.shape_225.setTransform(149.1,414.1);

  this.shape_226 = new cjs.Shape();
  this.shape_226.graphics.f("#000000").s().p("AgbARQgJgFAGgIQAKgNARgGQAQgGAPAIQAJAEgFAJQgFAHgJgFQgIgCgKACQgIAEgFAIQgEAEgEAAQgDAAgDgBg");
  this.shape_226.setTransform(164,420);

  this.shape_227 = new cjs.Shape();
  this.shape_227.graphics.f("#000000").s().p("AgjAKQACggA7AFQAKABAAAKQAAAIgKgBQgpgCAAALQgBAJgKAAQgKAAABgJg");
  this.shape_227.setTransform(166.4,422.7);

  this.shape_228 = new cjs.Shape();
  this.shape_228.graphics.f("#000000").s().p("AgcASQgIgFAFgIQAKgNAQgHQAOgGARAEQAKACgDAKQgCAHgKgCQgLAAgKACQgIAEgGAJQgDAFgFAAQgCAAgEgCg");
  this.shape_228.setTransform(169.2,425.4);

  this.shape_229 = new cjs.Shape();
  this.shape_229.graphics.f("#000000").s().p("AgZASQgKgCACgKQAFgSAUgEQAOgEAVAGQAKADgDAJQgDAIgJgDQgPgDgHAAQgLAAgDALQgCAIgGAAIgDgBg");
  this.shape_229.setTransform(172.2,427.4);

  this.shape_230 = new cjs.Shape();
  this.shape_230.graphics.f("#000000").s().p("AgEAlQgJgCACgKQADgLABgOIABgbQABgKAIAAQAKAAgBAKIgBAcQgCASgDAMQgBAHgFAAIgEgBg");
  this.shape_230.setTransform(172.5,452.3);

  this.shape_231 = new cjs.Shape();
  this.shape_231.graphics.f("#000000").s().p("AhKAvQghgCgXgFQgWgGgDgYIABgtQABgEACgDQACgDAFAAIEigCQAEgBADADQADADAAAEQAAAwgBAGQgGAVgfACQhfAJgnAAIg6gBgACFgcIgKABIkBACQgBAVACAEQAEAQAUAGQAKADASABIAbAAQAlACARgBQAQgBAzAAQAugCAOgPQAFgFAFgPQAGgQgBgBIgFAAIgEAAg");
  this.shape_231.setTransform(174,451.3);

  this.shape_232 = new cjs.Shape();
  this.shape_232.graphics.f("#E6E6E6").s().p("AiCAeIgKgCQgDgDgBgHQgCgLABgMIABgeIEigDQABAbgDAdQgBAIgDABIgHACIhkAGIgxAEQhNgEglgFg");
  this.shape_232.setTransform(174,451.3);

  this.shape_233 = new cjs.Shape();
  this.shape_233.graphics.f("#000000").s().p("AgNAYQg+gLgFgZQgCgJAKgDQAJgCACAJQACALAaAGQASAEAPABQAiACAggOQAIgEAFAIQAFAHgIAEQgiARgjAAQgJAAgLgBg");
  this.shape_233.setTransform(145.8,426.2);

  this.shape_234 = new cjs.Shape();
  this.shape_234.graphics.f("#000000").s().p("AiBAtQgEgeAPgXQAPgXAdgMQAjgOA7AJQBIAKAagEQAJgCADAKQADAKgKABQgQADgwgFQg6gGgWAAQhjAAAKBHQACAJgKADIgEABQgGAAgBgIg");
  this.shape_234.setTransform(177.8,440.4);

  this.shape_235 = new cjs.Shape();
  this.shape_235.graphics.f("#000000").s().p("AAwA7QgggEgWgOQgTgMgYgXIgYgbQgQgSgRgBQgJgBAAgKQAAgKAJABQAVACARAPQAKAJATAXQAdAeAkAMQAgALAwgBQAKAAAAAKQAAAKgKAAIgKAAQgfAAgRgCg");
  this.shape_235.setTransform(169,424.7);

  this.shape_236 = new cjs.Shape();
  this.shape_236.graphics.f("#000000").s().p("AAYCjQgUgDgkgMQgmgMgUgDQgWgChagFQgpABgTgDQghgEgQgXQgZgmAOhOQAFgaATgfQAZgrAEgLIADgDQADgGAHACQApAOATACQAdABAhgQQAxgZAdgDQAigDAdAWQASANAjAhQAlAgA7AUIBoAhQAfAMATAUQAWAagFAeQgHAhgiASQgXAMgpAHIhjAQQgiAFgdAAQgTAAgRgCgAkXhHQgTAfgFAaQgLBDATAfQAJAPAUAEQALABAaAAIBhAEQA4AEAmANQA2ASBAgCQAngBBRgNQApgGAGgCQAZgFAUgRIgDhJQgLgRgmgJQgsgJgPgEQhTgXhBg6QgTgTgLgJQgRgQgSgDQgXgEgfALIgyAYQggAPgggEQgRgBglgNIgZAsg");
  this.shape_236.setTransform(166.9,434);

  this.shape_237 = new cjs.Shape();
  this.shape_237.graphics.f("#333333").s().p("AgJCRQgfgMgQgEQgXgGgqgCIiigKQgTgPgHgRQgLgbAGg0QAFgxAXgkQAYgfADgLIADABQAYAPAdADQAdACAagMIAZgMQAOgIALgDIAVgIQANgEAIgBQAdgBAPAHQAGACAQAQIAxArQAcAbAsASQAfAMA0ANQAZAGAMAEQAUAHAOAIQAQALAJARQAKASgDASQgFAdghARQgTAJgpAHIhAAKQg4AJgcABIgOABQgmAAgcgKg");
  this.shape_237.setTransform(166.9,434);

  this.shape_238 = new cjs.Shape();
  this.shape_238.graphics.f("#000000").s().p("Ag7BfIg3gGQgIgBgCgHQgKgbABgRQABgKAKgiQAPgwAGggQABgEAEgCQAEgCAEABQBAARA5AEQAHAAAXgBQAVgBAIAFQAGADACAFIAEALIALAmQAGASAJANQACABACAEIAAABQABADgBADIgDAFIAAAAIgDACIiGAzQgTAHgXAAIgLAAgAhUhHQgGAKgFAgQgEAPgNAkQgIAeALARIADABIAUABIApAEQALAAAJgCIAUgHIBzgsQgKgOgHgRQgBgDgDgRQgCgPgCgCQgHgJgegBQgiABgJgBIgkgDQgagDgLgGQgFgDgGgGIgBAAIgEAGg");
  this.shape_238.setTransform(153.8,416.7);

  this.shape_239 = new cjs.Shape();
  this.shape_239.graphics.f("#FFFFFF").s().p("AhxBOIgNgjQASg1ALgrIAHggQBOAWBSAAIAPAAQAIABABAGIAEAPIgBAJQAAAFACAEQAEAGAIASQAIASAIAIIicA7g");
  this.shape_239.setTransform(153.6,416.7);

  this.shape_240 = new cjs.Shape();
  this.shape_240.graphics.f("#000000").s().p("AgLDCQgJgCABgKQAbi0gIi6QgBgKAIAAQAKAAAAAKQALC7gcC5QgBAHgGAAIgEgBg");
  this.shape_240.setTransform(151.5,353.1);

  this.shape_241 = new cjs.Shape();
  this.shape_241.graphics.f("#000000").s().p("AARAdQgagRgVgbQgFgIAIgFQAJgFAFAIQAOAXAaAOQAJAFgFAIQgDAGgFAAQgCAAgEgCg");
  this.shape_241.setTransform(154,327.1);

  this.shape_242 = new cjs.Shape();
  this.shape_242.graphics.f("#000000").s().p("AhBHrQAKhhAciTIAsj0QAzklgljFQgCgKAJgCQAKgDACAJQAlDIgyElIgsD2QgcCUgKBhQgBAKgKAAQgKAAABgKg");
  this.shape_242.setTransform(167.9,360.5);

  this.shape_243 = new cjs.Shape();
  this.shape_243.graphics.f("#000000").s().p("ABSHPQgJgDADgJQAwifAKhbQAPiMgshvQgmhhhLhuQgyhIhghzQgGgIAHgHQAHgHAHAHQBhB2AxBKQBOBwAnBkQAtBygPCOQgKBdgxCiQgCAHgGAAIgFAAg");
  this.shape_243.setTransform(160.3,276);

  this.shape_244 = new cjs.Shape();
  this.shape_244.graphics.f("#000000").s().p("ADeMuQgKgCACgKQASh2gHh1QgCgugPhIQgUhdgEgYQgQhnAQiFQAOhUAEgoQAGhHgSg1QgPgvgEguIAAgiQgBgUgEgNQgFgOgLgRIgVgcIgzhJQgfgogbgcIiIiKQhNhQgxhFQgGgIAJgFQAJgFAFAIQAyBFBWBYICQCTQAaAdAhAuIA2BPQARAYADARIACAvQACAeAIAiIARA/QAOAwgJBFQgFAlgNBOQgTCZAdCFQAYBwAGBkQAFBsgQBpQgBAIgGAAIgEgBg");
  this.shape_244.setTransform(122.6,327.6);

  this.shape_245 = new cjs.Shape();
  this.shape_245.graphics.f("#C59C70").s().p("ABNNvQAMhMABhYQAChggOhEIgQhJQgKgugFgcQgLhIAEhUQAEhDAPhYQAIg0ACgSQADgmgHgeQgDgLgGgSIgJgdQgRg7AEhPIhpiZQgNgSiViSQiFiDgOgpIHOikQCBCbBLB/QBABtANBEIANBIQAEAjABAlQAABHgGAhQgDAQgZBVQAmC/g2E6IgtDtQgbCPgKBgg");
  this.shape_245.setTransform(137.3,320.2);

  this.shape_246 = new cjs.Shape();
  this.shape_246.graphics.f().s("#000000").ss(2).p("AByJmQhvjqhkoHQgfiigbiqQgViEAAgJIBCgEQAAACAVCLQAbCpAfCgQBiH6BrDhg");
  this.shape_246.setTransform(227.2,381.2);

  this.shape_247 = new cjs.Shape();
  this.shape_247.graphics.f("#1073B9").s().p("AhfiKQggihgbiqQgViEAAgJIBCgEIAVCMQAbCqAgCfQBiH6BrDiIg8AcQhvjphkoIg");
  this.shape_247.setTransform(227,381.1);

  this.shape_248 = new cjs.Shape();
  this.shape_248.graphics.f().s("#000000").ss(2,1).p("AAQgTQgKgDgHAEQgSAHAFAg");
  this.shape_248.setTransform(272.5,217.6);

  this.shape_249 = new cjs.Shape();
  this.shape_249.graphics.f().s("#000000").ss(2,1).p("AhshwIAHA2QAQA5AvAVQApAUAZAjQAXAgAOAFIApglQgOgWgRgdQgig4gJgl");
  this.shape_249.setTransform(264,218.8);

  this.shape_250 = new cjs.Shape();
  this.shape_250.graphics.f().s("#000000").ss(2,1).p("AknkrIASAyQAYA4AcAfQAcAeAUAtQALAXAOAgQAgAzAXAYQA+BDBiAvQBcAqA9AuQA/AuARAJ");
  this.shape_250.setTransform(223.3,182.8);

  this.shape_251 = new cjs.Shape();
  this.shape_251.graphics.f().s("#000000").ss(2,1).p("Akgj9QCTBWBbCQQALAQAUAfQASAcAOARQAiAjA5AZQAhAOBIAWQAWAHAKAEQARAHALAKQAOAMAEARQAFASgIAO");
  this.shape_251.setTransform(256,190.9);

  this.shape_252 = new cjs.Shape();
  this.shape_252.graphics.f().s("#000000").ss(2,1).p("Aivl3QBEA0AfB7QADALASBZQAMA8AOAmQAWA3BWCDQBPB1ASBK");
  this.shape_252.setTransform(209.4,127.8);

  this.shape_253 = new cjs.Shape();
  this.shape_253.graphics.f("#C59C70").s().p("AFwKTQgYgkgtgRQgkgMgVgjIgOghQgRgIg/gvQg+gthZgrQhlgug+hDQgWgZggg1IgZg3QgVgsgbgeQgcgfgYg2IgTgyIi3koIAslKIB5AAQBEA1AeB6IAVBkQANA9AOAlQAVA5BZCDQBPB2ARBIQCRBWBcCPIAeAyQASAbARASQAiAjA4AYQAiAPBHAVIAgAMQASAGALALQANAMAFARQAEASgIAOIhmgIQgKgBgKADQgVAHgCAXQASAkAeAnIgqAlQgLgDgYgkg");
  this.shape_253.setTransform(230.1,160.1);

  this.shape_254 = new cjs.Shape();
  this.shape_254.graphics.f("#FFFFFF").s().p("AAQCPIgHgjIgJgyIgNhxIgEgzIgCgkIAAgOIABAAIAmE4IgBABg");
  this.shape_254.setTransform(105.4,334.4);

  this.shape_255 = new cjs.Shape();
  this.shape_255.graphics.f().s("#000000").ss(2).p("ABINhIjr60IBcgNIDra1g");
  this.shape_255.setTransform(106.2,355.4);

  this.shape_256 = new cjs.Shape();
  this.shape_256.graphics.f("#1073B9").s().p("AijtTIBcgNIDra1IhcAMg");
  this.shape_256.setTransform(106.2,355.4);

  this.shape_257 = new cjs.Shape();
  this.shape_257.graphics.f().s("#000000").ss(2).p("AF3CrQgTEJhsC4Qh5DOirgYQgVgCgZgJQifg5hVkGQhUkBAZlMQAalZB3jCQB0i9CgAXQA6AIAyAjQB/BVBADYQBMEAgcGJgAAnuaQjzgiiSEmQh8D6gOF7QgOFiBnEEQB5E0DyAiQDGAcCWjgQCTjdAalkQAbl8hdkkQh0lrkIglg");
  this.shape_257.setTransform(49.1,383.8);

  this.shape_258 = new cjs.Shape();
  this.shape_258.graphics.f("#666666").s().p("AgkObQjygih5k0QhnkEAOliQAOl7B8j6QCSkmDzAiQEIAlB0FrQBdEkgbF8QgaFkiTDdQiFDHitAAQgUAAgWgDgAj4qQQh3DCgaFZQgZFMBUEBQBVEGCfA5QAZAJAVACQCrAYB5jOQBsi4ATkJQAcmJhMkAQhAjYh/hVQgygjg6gIQgSgDgPAAQiMAAhnCpg");
  this.shape_258.setTransform(49.1,383.8);

  this.shape_259 = new cjs.Shape();
  this.shape_259.graphics.f().s("#000000").ss(2).p("AEMsGQgYgKgagDQiigXhyC+Qh3DBgaFaQgWEqBDDzQBDD1CDBbQidg5hWkGQhTkBAZlMQAZlZB3jCQB0i9CgAXQA6AIAzAjg");
  this.shape_259.setTransform(36,383.3);

  this.shape_260 = new cjs.Shape();
  this.shape_260.graphics.f("#E6E6E6").s().p("AjLHpQhTkBAZlMQAZlZB3jCQB0i9CgAXQA6AIAzAjQgYgKgagDQiigXhyC+Qh3DBgaFaQgWEqBDDzQBDD1CDBbQidg5hWkGg");
  this.shape_260.setTransform(36,382.1);

  this.shape_261 = new cjs.Shape();
  this.shape_261.graphics.f().s("#000000").ss(2).p("AJjCKQgFnjiQlnQizm9lIgSQgngCghAEIAAAAQgfAEgeAIIgEACQjpBHhxFqQhiE4ASGfQAUHBCZE+QC0F4EsAQQB8AHBrhMQBnhKBNiNQCgkngFnDgAAvQZQgSACgZgBQhvgGhkhfQhfhahIifQiVlKgEnNQgDm9CBkGQB+j/DNALQAZACASAEQDFApCDESQCeFLAHJJQADFDhpDyQh2EOjHATg");
  this.shape_261.setTransform(230.3,438.5);

  this.shape_262 = new cjs.Shape();
  this.shape_262.graphics.f().s("#000000").ss(2).p("AAnuaQjzgiiSEmQh8D6gOF7QgOFiBnEEQB5E0DyAiQDGAcCWjgQCTjdAalkQAbl8hdkkQh0lrkIglgAF3CrQgTEJhsC4Qh5DOirgYQgVgCgZgJQifg5hVkGQhUkBAZlMQAalZB3jCQB0i9CgAXQA6AIAyAjQB/BVBADYQBMEAgcGJg");
  this.shape_262.setTransform(49.1,383.8);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.instance_4},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_262},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.instance_4},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_261},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-2.2,293.6,558.8);


// stage content:



(lib.Bike3 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  this.stop();
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
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

  // thums
  this.wheels_mc = new lib.Symbol6();
  this.wheels_mc.parent = this;
  this.wheels_mc.setTransform(263.4,295,1,1,0,0,0,145.6,277.2);

  this.timeline.addTween(cjs.Tween.get(this.wheels_mc).to({x:254.4,y:291},24).to({x:263.4,y:295},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(371.6,310.6,293.5,558.8);

})(pencilsLib = pencilsLib||{}, pencilsImages = pencilsImages||{}, createjs = createjs||{}, ss = ss||{});
var pencilsLib, pencilsImages, createjs, ss;

