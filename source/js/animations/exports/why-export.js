(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
  width: 510,
  height: 590,
  fps: 24,
  color: "#FFFFFF",
  opacity: 1.00,
  manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.Tween7 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#333333").p("AgxAoIgBABIAMgsQAAgBAHgeQAEgTAHgLQADgFALgOQALgQADgCQAUgKAPAQQANAPgBASIAAAEIgIApQgJgBAAAIIgBAGQAAAEAFACIgQBDQgFADACAGIABAFQAAAIgEAHQgMgegNgQQgVgWgXAKg");
  this.shape.setTransform(71.3,-193.7);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f().s("#333333").p("AACAMIgLgQIATgJg");
  this.shape_1.setTransform(66.8,-185.9,1,1,0,0,0,0,-0.4);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f().s("#333333").p("AgGgQQAAgCAAgCQALAJANAkQgNAEgPgFIgIgBg");
  this.shape_2.setTransform(70.2,-185.3);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f().s("#333333").p("AI1gTQAzDDhcC+QgXAwgcArQiLA8ifgeQgrgIhTgJQhTgKgpgHQg8gLg/gSIBilZQARADAKABQANABAJgEQAEADAFgDQAFgDgCgFIAAgBQAJgJAEgSQAOhAAIggQABgDAJg5QAHglAKgVQADgHgGgEQgHgEgEAHIgBABIgBACQgEAJgDAPQgCABgCADIgBAEQgMgRgVgEQgXgEgUAPQgNAKgJAZQgCAHgJAiQgEAPgIAhQgHAcgHAQQgCADADAFQgEAQAGAPQAGAPAPAGIhiFYQg8gSg8gXQg3gTgbgKQgvgSgfgTQgbgRgjgeIgJgIQgEgFgEgBQgShuARhzQARhwAwhpQABAAABgDIABgCQABgEgDgDQBWifCohPQCohPCxAjQCsAgCDCEQB+B/AtCvg");
  this.shape_3.setTransform(78,-189.2);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f().s("#333333").p("AgSgkQACACAPANQAIAJAFAIQAgAmgDAOQgBAIgXAMQgGgCgDADIgDAEIgGACQgIhAgWg+QAIALAFAEg");
  this.shape_4.setTransform(137.9,-191.2);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f().s("#333333").p("AAMgxQADAQACAcQABAfACALQACAUABAWQgKg/gHgcQgDgMgGgVQgIgXgDgLQgCgLgBgGQgCgJgDgGIAOgJQARAzADAUg");
  this.shape_5.setTransform(143,-171.8);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f().s("#333333").p("AD3A+QgPAHgUAGQgjALghACQhFACg6gHQh3gPhDgPIhygZQgUgFgsgNIAchgQBQAZBKAIQBWAKCoAYQCTAMBpgnQgqA7g0Axg");
  this.shape_6.setTransform(89.6,-136.4);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f().s("#333333").p("ADdAWQh+BLiMACQiKADh9hEIAmiDQAiAKBDASQA7AQAsAHQBSAOAXADQA9AJAvADQBOAFArgLIAbgGQgmAdgkAWg");
  this.shape_7.setTransform(81.5,-124.1);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f().s("#333333").p("AgbAbQg/hAgnhSQAdAYA5AkQA4AgBJARIA0ALIglCCQhHgpg5g/g");
  this.shape_8.setTransform(39,-134.5);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f().s("#333333").p("AiKgHQgYg4gLhAQAJAFAPAPQARAQACABQAfAWAfAPQAdAOArAQQAZAJAyAQQAsASA0APIgbBhQgegJgQgDQhPgTg7giQgVgMgfgZQglgegNgHg");
  this.shape_9.setTransform(38.4,-149.1);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f().s("#333333").p("ABXhnIgHAMQgBADABADQgIAMgPARQgRASgHAIQgOAQgTAWQgbAjgFAGIggAnQAIgNA9haQAsg/AYgrIARAQg");
  this.shape_10.setTransform(14.6,-200.3);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f().s("#333333").p("AghAeQgGgFgDgCQgFgFgDgFQAGgIAMgRQALgPAMgFQAQgHAmgGQglArgZAvg");
  this.shape_11.setTransform(27.8,-215.5);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f().s("#333333").p("EAPGgk/Qimg/ivArQiuArh2CAQgDgCgEAAQgcAIgOACQgYADgIAFQgOAGgMASQgMAVgIAJQgDAEABAFIgBABQgaAwg/BaQg/BbgaAvQgCAEABADQgTAUgRASQgeAcgkArQgpAygUAZQhSBigjAvQg8BRiuDnQiTDDhWB2QhQBtgjAtQhCBVg4A/Qg1A8hABWQgHAKhlCOQg0BKhIBaQgnAxhbBsQg0A/hFBaQgnAzhPBnQg4BHhQBiQgvA4hdBvQg3BCg4BWQgUAfgpA9QgKAQgPAgQgQAigHAOQgEAHAHAEQAHAEAEgHQAIgOALgYQANgdAFgKQAJgSASgaQAUgcAJgPQA7haA0hCQAjgsBZhnQBQheAqg3QCIiyBmiDQAkguBXhoQBQhhAqg4QAngzBLhnQBKhnAngzQAhgsBdhqQAYgbAfgqQAigwASgXQCbjVBOhrQCJi6BmiCQAXgdAsg6QAog0AdgiQALgMA7hKQArg1AfgeQAwgvBXhnQAYgcAvg6QAIgJAQgSQAPgRAIgMIADgFQABgDgBgDIACgEIAAAAIAEADIgLAXQgDAGAGAEQgrBngOBtQgPBwASBpQgBAEACADQAMBFAZA+QgDAGAHADQAZA8AoA6QBNBrBxBAMgQDA4IQgCAIAIACQAIACACgIMAQBg4EQBqA5B0AIQB6AJBwgtQBogqBahSQAPgHAJgJQAEgEgCgFQBnhoA2iDQA5iKgMiHQADAEADAAQAFAAACgEIACgEQADAIAEAQQADASACAEQANAlAGAfQAFAXAIAuQAIAoAKAbIADAJIAEAhQABAFAEABIACALQADAQAVA/QAQAyADASQADALACAaQACAXADANQABAEAJAYQAFARABANQABAHAAAVQAAARABALQADAbAMArQAPA3ADAPQACALAJAVQAOAdAMAtQASA/AgBXQAtB7ApCWQAgBzAlCjQAhCPA1CKQAWA4AXBbQAgB7AHAZQAKAjAkCBQAcBmAUA+QAJAdAOA0QAPA5AIAZIARA6QADAIAJATQAHASgBAKQgLgCgFAEQAIANAOAGQADACADAAQAEgCACgGQAFgMgFgQQgCgIgIgPQgHgOgCgIQgGgcgOgrQgSg3gFgQQgmiCgsiiQgNgygehrQgdhmgOg3QgRg/gfhLQgNgdgNgvQgPg1gIgaQgIgcgKgrQgLgvgGgYQgCgLgFgbQgDgYgEgNQgRgvgFgZQgGgZgLgoQgQgzgDgNQgfhzgSgzQghhYgPgsQgBgEgUhHQgNgugPgbQgGgMgEgTQgDgVgDgLIgShBQgFgVgCgrQgDgrgFgWQgGgVgLg3QgKgwgJgcQgUg5gHgeQgHgmgGgTQgFgzgEhYQgEhCgahNIgBgBQAFgHgBgIQgBgFgGgOQgNgfgVgVQgUgRgJgKQgEgFgLgQQgKgMgHgHQgCgCgCAAQgzh9hdheQhfhhh6gug");
  this.shape_12.setTransform(0.4,0);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f().s("#333333").p("AgFgDQgFAFAIAEQAFAEADgHQAFgEgIgEQgFgEgDAGg");
  this.shape_13.setTransform(67.8,-205.9);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f().s("#333333").p("AgFgEIgBADQgEAFAHAEQAFADAEgGIABgDQAEgEgHgEQgFgEgEAGg");
  this.shape_14.setTransform(65.3,-197.3);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f().s("#333333").p("AgFgEIgBACQgEAFAHAEQAFAEAEgHIABgCQAEgEgHgEQgFgEgEAGg");
  this.shape_15.setTransform(62.8,-188.5);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f().s("#333333").p("AgBgGQgGgBgBAHQgBAFAHACIACABQADABACgDIACgCQAFgEgFgEQgEgGgEAEg");
  this.shape_16.setTransform(23.6,-163.3);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f().s("#333333").p("AgFgEIgBADQgEAFAHAEQAFAEAEgHIABgDQAEgEgHgEQgFgEgEAGg");
  this.shape_17.setTransform(38.6,-154.6);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f().s("#333333").p("AAAgGIAAAAQgGgCgDAGQgDAFAGADQAGADAEgCQAIgDgCgFQgBgDgDgCQgDgBgDABg");
  this.shape_18.setTransform(84.4,-143.1);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#D6D6D6").s().p("AgfAWQg/hAgnhSQAdAXA5AkQA4AgBJASIA0ANIglB/QhHgpg5g+g");
  this.shape_19.setTransform(39.4,-134);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#000000").s().p("AgDAIQgHgEAEgFIABgDQAEgGAFAEQAHAEgEAEIgBADQgDAEgDAAIgDgBg");
  this.shape_20.setTransform(38.6,-154.6);

  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#D6D6D6").s().p("ABmB2QhQgTg6giQgWgMgegZQglgcgOgJQgXg4gMhAQAJAFAPAPIATARQAfAWAfAPQAeAOAqAQIBLAZQAtASA0APIgcBhIgtgMg");
  this.shape_21.setTransform(38.5,-148.9);

  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#000000").s().p("AgBAIIgCgBQgGgCABgFQABgHAGABQAEgEAEAGQAFAEgGAEIgBACQgCADgDAAIgBgBg");
  this.shape_22.setTransform(23.6,-163.3);

  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#D6D6D6").s().p("AktAhIAmiDIBlAcQA7AQAsAHIBpARQA9AJAvADQBOAFArgLIAbgGQgmAegkAVQh+BLiMACIgKABQiFAAh4hCg");
  this.shape_23.setTransform(80.8,-124);

  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#000000").s().p("AgGAGQgGgDADgFQADgGAGACIAAAAQADgBADABQADACABADQACAFgIADIgEABQgCAAgEgCg");
  this.shape_24.setTransform(84.4,-143.1);

  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#D6D6D6").s().p("AAUBSQh2gPhDgPIhzgZQgTgFgtgNIAchgQBQAZBKAIQBWAKCpAYQCSAMBqgnQgrA7g0AxQgPAHgUAGQgiALghACIgiABQgyAAgsgGg");
  this.shape_25.setTransform(89.3,-136.3);

  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#000000").s().p("AgDAHQgHgEAEgFIABgCQAEgGAFAEQAHAEgEAEIgBACQgDAFgDAAIgDgCg");
  this.shape_26.setTransform(62.8,-188.5);

  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#3D3D3D").s().p("AgFAAQApg9AZgrIARAQIgDACIgHAMQgCADACADQgJAMgOARIgZAaQgNAOgSAYIghApIghAnIBIhpg");
  this.shape_27.setTransform(15.9,-202);

  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#3D3D3D").s().p("AgJgDIATgJIgIAZg");
  this.shape_28.setTransform(66.8,-185.7);

  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#3D3D3D").s().p("AgKAVIgHgBIALgnIAAgEQAMAJANAkQgHACgGAAQgHAAgJgDg");
  this.shape_29.setTransform(70.2,-185);

  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#3D3D3D").s().p("AgeAfIgJgIQgFgFgDgEIASgZQALgQAMgFQAQgHAmgGQglArgZAwg");
  this.shape_30.setTransform(27.5,-215.5);

  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#000000").s().p("AgDAIQgHgEAEgFIABgDQAEgGAFAEQAHAEgEAEIgBADQgCAEgEAAIgDgBg");
  this.shape_31.setTransform(65.3,-197.3);

  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#000000").s().p("AgDAGQgGgEAEgFQAEgGAEAEQAIAEgFAEQgCAFgEAAIgDgCg");
  this.shape_32.setTransform(67.8,-205.9);

  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#3D3D3D").s().p("AgHA3QgVgWgXALIgBABIAMgtIAHgfQAEgTAHgLIAOgTQALgQADgBQAUgKAPAQQANAOgBATIAAADIgIApQgJgBAAAJIgBAGQAAAEAFABIgQBDQgFADACAGIABAFQAAAIgEAIQgMgfgNgQg");
  this.shape_33.setTransform(71.5,-194);

  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#3D3D3D").s().p("AAGAHIgJgfIgLgiIgDgRQgCgJgDgGIAOgJQARAzADAUQADAQACAaQABAiACAKQACAVABAVQgKg+gHgfg");
  this.shape_34.setTransform(143,-173.9);

  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#3D3D3D").s().p("Agkg/IANAQIARAPQAIAJAFAHQAgAmgDAPQgBAIgXALQgGgCgDAEIgDAEIgGACQgIhAgWg/g");
  this.shape_35.setTransform(138.4,-190);

  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#8C8C8C").s().p("ACvHnQgrgIhTgJQhTgKgpgHQg8gLg/gSIBilZQARADAKABQANABAJgEQAEADAFgDQAFgDgCgFIAAgBQAJgJAEgSQAOhAAIggIAKg8QAHglAKgVQADgHgGgEQgHgEgEAHIgBABIgBACQgEAJgDAPIgEAEIgBAEQgMgRgVgEQgXgEgUAPQgNAKgJAZIgLApIgMAwQgHAcgHAQQgCADADAFQgEAQAGAPQAGAPAPAGIhiFYQg8gSg8gXIhSgdQgvgSgfgTQgbgRgjgeIgJgIQgEgFgEgBQgShuARhzQARhwAwhpIACgDIABgCQABgEgDgDQBWifCohPQCohPCxAjQCsAgCDCEQB+B/AtCvQAzDDhcC+QgXAwgcArQhcAohmAAQgzAAg1gKgAA1HJQgDAHAGADQAHADAFgCQAIgDgCgHQgBgDgDgCQgDgBgDABIgBAAIgDAAQgFAAgCAEgAmPFVIgCACQgDAHAHAEQAHAEADgHIACgCQAEgHgHgEIgFgBQgEAAgCAEgAooEBQgBAHAHACIACABQAFABACgDIACgCQAFgFgFgFQgEgGgGAEIAAAAQgGAAgBAGgAidACIgCACQgDAHAHAEQAHAEADgHIACgCQAEgHgHgDIgFAAQgEAAgCACgAiEhUIgCACQgDAHAHAEQAHAEAEgHIABgCQAEgHgHgEIgFgBQgEAAgCAEgAhsiqQgEAHAHAEQAHAEAEgHQAEgGgHgEIgFgCQgEAAgCAEg");
  this.shape_36.setTransform(78,-189.2);

  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#000000").s().p("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");
  this.shape_37.setTransform(0.4,0);

  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f().s("#333333").p("AgGgDQgEAFAIAEQAFAEAEgHQAEgEgIgEQgEgEgFAGg");
  this.shape_38.setTransform(-217.2,102.4);

  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#000000").s().p("AgCAGQgIgEAEgFQAFgGAEAEQAIAEgEAEQgDAFgEAAIgCgCg");
  this.shape_39.setTransform(-217.2,102.4);

  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f().s("#333333").p("ABCsZQADAVgEAfQgDARgGAiQgLA6gDAZQgIBHAABhQgBCLgMBdQgDAXgNBPQgJA/gDAnQgEBFgICOQgIB6gLBaQgEAkgIBHQgHA/gFAqQgEAagLA5QgJA0AGAfQABAIAIgCQAHgDgBgHQgDgUAFggQAHgjACgQQAIg4ADgcQAEgqAJhIQAKhSADggQAHhDAHiKQAFiJAIhDQADgiANhIQAMhEADgmQAEgoAChDQAChSABgaQAHh/AGgzQAKg2AFgbQAJgygGgfQgBgIgIADQgHACABAHg");
  this.shape_40.setTransform(73.9,-32.9);

  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#000000").s().p("AhQMeQgGgfAJg0QALg5AEgaIAMhpIAMhrQALhaAIh6IAMjTQADgnAJg/IAQhmQAMhdABiLQAAhhAIhHQADgZALg6IAJgzQAEgfgDgVQgBgHAHgCQAIgDABAIQAGAfgJAyIgPBRQgGAzgHB/IgDBsQgCBDgEAoQgDAmgMBEQgNBIgDAiQgIBDgFCJQgHCKgHBDIgNByQgJBIgEAqQgDAcgIA4IgJAzQgFAgADAUQABAHgHADIgDAAQgFAAgBgGg");
  this.shape_41.setTransform(73.9,-32.9);

  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f().s("#333333").p("AgFgEIgBADQgEAFAHAEQAFAEAEgHIABgDQAEgEgHgEQgFgEgEAGg");
  this.shape_42.setTransform(122.6,-143.4);

  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#000000").s().p("AgDAIQgHgEAEgFIABgDQAEgGAFAEQAHAEgEAEIgBADQgDAEgDAAIgDgBg");
  this.shape_43.setTransform(122.6,-143.4);

  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f().s("#333333").p("AgGgDQgDAFAHAEQAFAEADgHQAEgEgHgEQgFgEgEAGg");
  this.shape_44.setTransform(107.3,-141.4);

  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#000000").s().p("AgCAGQgHgEADgFQAEgGAFAEQAHAEgEAEQgCAFgEAAIgCgCg");
  this.shape_45.setTransform(107.3,-141.4);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.1,-241.5,438.3,483.2);


(lib.Tween5 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f().s("#333333").p("AgxAoIgBABIAMgsQAAgBAHgeQAEgTAHgLQADgFALgOQALgQADgCQAUgKAPAQQANAPgBASIAAAEIgIApQgJgBAAAIIgBAGQAAAEAFACIgQBDQgFADACAGIABAFQAAAIgEAHQgMgegNgQQgVgWgXAKg");
  this.shape.setTransform(71.3,-193.7);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f().s("#333333").p("AACAMIgLgQIATgJg");
  this.shape_1.setTransform(66.8,-185.9,1,1,0,0,0,0,-0.4);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f().s("#333333").p("AgGgQQAAgCAAgCQALAJANAkQgNAEgPgFIgIgBg");
  this.shape_2.setTransform(70.2,-185.3);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f().s("#333333").p("AI1gTQAzDDhcC+QgXAwgcArQiLA8ifgeQgrgIhTgJQhTgKgpgHQg8gLg/gSIBilZQARADAKABQANABAJgEQAEADAFgDQAFgDgCgFIAAgBQAJgJAEgSQAOhAAIggQABgDAJg5QAHglAKgVQADgHgGgEQgHgEgEAHIgBABIgBACQgEAJgDAPQgCABgCADIgBAEQgMgRgVgEQgXgEgUAPQgNAKgJAZQgCAHgJAiQgEAPgIAhQgHAcgHAQQgCADADAFQgEAQAGAPQAGAPAPAGIhiFYQg8gSg8gXQg3gTgbgKQgvgSgfgTQgbgRgjgeIgJgIQgEgFgEgBQgShuARhzQARhwAwhpQABAAABgDIABgCQABgEgDgDQBWifCohPQCohPCxAjQCsAgCDCEQB+B/AtCvg");
  this.shape_3.setTransform(78,-189.2);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f().s("#333333").p("AgSgkQACACAPANQAIAJAFAIQAgAmgDAOQgBAIgXAMQgGgCgDADIgDAEIgGACQgIhAgWg+QAIALAFAEg");
  this.shape_4.setTransform(137.9,-191.2);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f().s("#333333").p("AAMgxQADAQACAcQABAfACALQACAUABAWQgKg/gHgcQgDgMgGgVQgIgXgDgLQgCgLgBgGQgCgJgDgGIAOgJQARAzADAUg");
  this.shape_5.setTransform(143,-171.8);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f().s("#333333").p("AD3A+QgPAHgUAGQgjALghACQhFACg6gHQh3gPhDgPIhygZQgUgFgsgNIAchgQBQAZBKAIQBWAKCoAYQCTAMBpgnQgqA7g0Axg");
  this.shape_6.setTransform(89.6,-136.4);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f().s("#333333").p("ADdAWQh+BLiMACQiKADh9hEIAmiDQAiAKBDASQA7AQAsAHQBSAOAXADQA9AJAvADQBOAFArgLIAbgGQgmAdgkAWg");
  this.shape_7.setTransform(81.5,-124.1);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f().s("#333333").p("AgbAbQg/hAgnhSQAdAYA5AkQA4AgBJARIA0ALIglCCQhHgpg5g/g");
  this.shape_8.setTransform(39,-134.5);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f().s("#333333").p("AiKgHQgYg4gLhAQAJAFAPAPQARAQACABQAfAWAfAPQAdAOArAQQAZAJAyAQQAsASA0APIgbBhQgegJgQgDQhPgTg7giQgVgMgfgZQglgegNgHg");
  this.shape_9.setTransform(38.4,-149.1);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f().s("#333333").p("ABXhnIgHAMQgBADABADQgIAMgPARQgRASgHAIQgOAQgTAWQgbAjgFAGIggAnQAIgNA9haQAsg/AYgrIARAQg");
  this.shape_10.setTransform(14.6,-200.3);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f().s("#333333").p("AghAeQgGgFgDgCQgFgFgDgFQAGgIAMgRQALgPAMgFQAQgHAmgGQglArgZAvg");
  this.shape_11.setTransform(27.8,-215.5);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f().s("#333333").p("EAPGgk/Qimg/ivArQiuArh2CAQgDgCgEAAQgcAIgOACQgYADgIAFQgOAGgMASQgMAVgIAJQgDAEABAFIgBABQgaAwg/BaQg/BbgaAvQgCAEABADQgTAUgRASQgeAcgkArQgpAygUAZQhSBigjAvQg8BRiuDnQiTDDhWB2QhQBtgjAtQhCBVg4A/Qg1A8hABWQgHAKhlCOQg0BKhIBaQgnAxhbBsQg0A/hFBaQgnAzhPBnQg4BHhQBiQgvA4hdBvQg3BCg4BWQgUAfgpA9QgKAQgPAgQgQAigHAOQgEAHAHAEQAHAEAEgHQAIgOALgYQANgdAFgKQAJgSASgaQAUgcAJgPQA7haA0hCQAjgsBZhnQBQheAqg3QCIiyBmiDQAkguBXhoQBQhhAqg4QAngzBLhnQBKhnAngzQAhgsBdhqQAYgbAfgqQAigwASgXQCbjVBOhrQCJi6BmiCQAXgdAsg6QAog0AdgiQALgMA7hKQArg1AfgeQAwgvBXhnQAYgcAvg6QAIgJAQgSQAPgRAIgMIADgFQABgDgBgDIACgEIAAAAIAEADIgLAXQgDAGAGAEQgrBngOBtQgPBwASBpQgBAEACADQAMBFAZA+QgDAGAHADQAZA8AoA6QBNBrBxBAMgQDA4IQgCAIAIACQAIACACgIMAQBg4EQBqA5B0AIQB6AJBwgtQBogqBahSQAPgHAJgJQAEgEgCgFQBnhoA2iDQA5iKgMiHQADAEADAAQAFAAACgEIACgEQADAIAEAQQADASACAEQANAlAGAfQAFAXAIAuQAIAoAKAbIADAJIAEAhQABAFAEABIACALQADAQAVA/QAQAyADASQADALACAaQACAXADANQABAEAJAYQAFARABANQABAHAAAVQAAARABALQADAbAMArQAPA3ADAPQACALAJAVQAOAdAMAtQASA/AgBXQAtB7ApCWQAgBzAlCjQAhCPA1CKQAWA4AXBbQAgB7AHAZQAKAjAkCBQAcBmAUA+QAJAdAOA0QAPA5AIAZIARA6QADAIAJATQAHASgBAKQgLgCgFAEQAIANAOAGQADACADAAQAEgCACgGQAFgMgFgQQgCgIgIgPQgHgOgCgIQgGgcgOgrQgSg3gFgQQgmiCgsiiQgNgygehrQgdhmgOg3QgRg/gfhLQgNgdgNgvQgPg1gIgaQgIgcgKgrQgLgvgGgYQgCgLgFgbQgDgYgEgNQgRgvgFgZQgGgZgLgoQgQgzgDgNQgfhzgSgzQghhYgPgsQgBgEgUhHQgNgugPgbQgGgMgEgTQgDgVgDgLIgShBQgFgVgCgrQgDgrgFgWQgGgVgLg3QgKgwgJgcQgUg5gHgeQgHgmgGgTQgFgzgEhYQgEhCgahNIgBgBQAFgHgBgIQgBgFgGgOQgNgfgVgVQgUgRgJgKQgEgFgLgQQgKgMgHgHQgCgCgCAAQgzh9hdheQhfhhh6gug");
  this.shape_12.setTransform(0.4,0);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f().s("#333333").p("AgFgDQgFAFAIAEQAFAEADgHQAFgEgIgEQgFgEgDAGg");
  this.shape_13.setTransform(67.8,-205.9);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f().s("#333333").p("AgFgEIgBADQgEAFAHAEQAFADAEgGIABgDQAEgEgHgEQgFgEgEAGg");
  this.shape_14.setTransform(65.3,-197.3);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f().s("#333333").p("AgFgEIgBACQgEAFAHAEQAFAEAEgHIABgCQAEgEgHgEQgFgEgEAGg");
  this.shape_15.setTransform(62.8,-188.5);

  this.shape_16 = new cjs.Shape();
  this.shape_16.graphics.f().s("#333333").p("AgBgGQgGgBgBAHQgBAFAHACIACABQADABACgDIACgCQAFgEgFgEQgEgGgEAEg");
  this.shape_16.setTransform(23.6,-163.3);

  this.shape_17 = new cjs.Shape();
  this.shape_17.graphics.f().s("#333333").p("AgFgEIgBADQgEAFAHAEQAFAEAEgHIABgDQAEgEgHgEQgFgEgEAGg");
  this.shape_17.setTransform(38.6,-154.6);

  this.shape_18 = new cjs.Shape();
  this.shape_18.graphics.f().s("#333333").p("AAAgGIAAAAQgGgCgDAGQgDAFAGADQAGADAEgCQAIgDgCgFQgBgDgDgCQgDgBgDABg");
  this.shape_18.setTransform(84.4,-143.1);

  this.shape_19 = new cjs.Shape();
  this.shape_19.graphics.f("#D6D6D6").s().p("AgfAWQg/hAgnhSQAdAXA5AkQA4AgBJASIA0ANIglB/QhHgpg5g+g");
  this.shape_19.setTransform(39.4,-134);

  this.shape_20 = new cjs.Shape();
  this.shape_20.graphics.f("#000000").s().p("AgDAIQgHgEAEgFIABgDQAEgGAFAEQAHAEgEAEIgBADQgDAEgDAAIgDgBg");
  this.shape_20.setTransform(38.6,-154.6);

  this.shape_21 = new cjs.Shape();
  this.shape_21.graphics.f("#D6D6D6").s().p("ABmB2QhQgTg6giQgWgMgegZQglgcgOgJQgXg4gMhAQAJAFAPAPIATARQAfAWAfAPQAeAOAqAQIBLAZQAtASA0APIgcBhIgtgMg");
  this.shape_21.setTransform(38.5,-148.9);

  this.shape_22 = new cjs.Shape();
  this.shape_22.graphics.f("#000000").s().p("AgBAIIgCgBQgGgCABgFQABgHAGABQAEgEAEAGQAFAEgGAEIgBACQgCADgDAAIgBgBg");
  this.shape_22.setTransform(23.6,-163.3);

  this.shape_23 = new cjs.Shape();
  this.shape_23.graphics.f("#D6D6D6").s().p("AktAhIAmiDIBlAcQA7AQAsAHIBpARQA9AJAvADQBOAFArgLIAbgGQgmAegkAVQh+BLiMACIgKABQiFAAh4hCg");
  this.shape_23.setTransform(80.8,-124);

  this.shape_24 = new cjs.Shape();
  this.shape_24.graphics.f("#000000").s().p("AgGAGQgGgDADgFQADgGAGACIAAAAQADgBADABQADACABADQACAFgIADIgEABQgCAAgEgCg");
  this.shape_24.setTransform(84.4,-143.1);

  this.shape_25 = new cjs.Shape();
  this.shape_25.graphics.f("#D6D6D6").s().p("AAUBSQh2gPhDgPIhzgZQgTgFgtgNIAchgQBQAZBKAIQBWAKCpAYQCSAMBqgnQgrA7g0AxQgPAHgUAGQgiALghACIgiABQgyAAgsgGg");
  this.shape_25.setTransform(89.3,-136.3);

  this.shape_26 = new cjs.Shape();
  this.shape_26.graphics.f("#000000").s().p("AgDAHQgHgEAEgFIABgCQAEgGAFAEQAHAEgEAEIgBACQgDAFgDAAIgDgCg");
  this.shape_26.setTransform(62.8,-188.5);

  this.shape_27 = new cjs.Shape();
  this.shape_27.graphics.f("#3D3D3D").s().p("AgFAAQApg9AZgrIARAQIgDACIgHAMQgCADACADQgJAMgOARIgZAaQgNAOgSAYIghApIghAnIBIhpg");
  this.shape_27.setTransform(15.9,-202);

  this.shape_28 = new cjs.Shape();
  this.shape_28.graphics.f("#3D3D3D").s().p("AgJgDIATgJIgIAZg");
  this.shape_28.setTransform(66.8,-185.7);

  this.shape_29 = new cjs.Shape();
  this.shape_29.graphics.f("#3D3D3D").s().p("AgKAVIgHgBIALgnIAAgEQAMAJANAkQgHACgGAAQgHAAgJgDg");
  this.shape_29.setTransform(70.2,-185);

  this.shape_30 = new cjs.Shape();
  this.shape_30.graphics.f("#3D3D3D").s().p("AgeAfIgJgIQgFgFgDgEIASgZQALgQAMgFQAQgHAmgGQglArgZAwg");
  this.shape_30.setTransform(27.5,-215.5);

  this.shape_31 = new cjs.Shape();
  this.shape_31.graphics.f("#000000").s().p("AgDAIQgHgEAEgFIABgDQAEgGAFAEQAHAEgEAEIgBADQgCAEgEAAIgDgBg");
  this.shape_31.setTransform(65.3,-197.3);

  this.shape_32 = new cjs.Shape();
  this.shape_32.graphics.f("#000000").s().p("AgDAGQgGgEAEgFQAEgGAEAEQAIAEgFAEQgCAFgEAAIgDgCg");
  this.shape_32.setTransform(67.8,-205.9);

  this.shape_33 = new cjs.Shape();
  this.shape_33.graphics.f("#3D3D3D").s().p("AgHA3QgVgWgXALIgBABIAMgtIAHgfQAEgTAHgLIAOgTQALgQADgBQAUgKAPAQQANAOgBATIAAADIgIApQgJgBAAAJIgBAGQAAAEAFABIgQBDQgFADACAGIABAFQAAAIgEAIQgMgfgNgQg");
  this.shape_33.setTransform(71.5,-194);

  this.shape_34 = new cjs.Shape();
  this.shape_34.graphics.f("#3D3D3D").s().p("AAGAHIgJgfIgLgiIgDgRQgCgJgDgGIAOgJQARAzADAUQADAQACAaQABAiACAKQACAVABAVQgKg+gHgfg");
  this.shape_34.setTransform(143,-173.9);

  this.shape_35 = new cjs.Shape();
  this.shape_35.graphics.f("#3D3D3D").s().p("Agkg/IANAQIARAPQAIAJAFAHQAgAmgDAPQgBAIgXALQgGgCgDAEIgDAEIgGACQgIhAgWg/g");
  this.shape_35.setTransform(138.4,-190);

  this.shape_36 = new cjs.Shape();
  this.shape_36.graphics.f("#8C8C8C").s().p("ACvHnQgrgIhTgJQhTgKgpgHQg8gLg/gSIBilZQARADAKABQANABAJgEQAEADAFgDQAFgDgCgFIAAgBQAJgJAEgSQAOhAAIggIAKg8QAHglAKgVQADgHgGgEQgHgEgEAHIgBABIgBACQgEAJgDAPIgEAEIgBAEQgMgRgVgEQgXgEgUAPQgNAKgJAZIgLApIgMAwQgHAcgHAQQgCADADAFQgEAQAGAPQAGAPAPAGIhiFYQg8gSg8gXIhSgdQgvgSgfgTQgbgRgjgeIgJgIQgEgFgEgBQgShuARhzQARhwAwhpIACgDIABgCQABgEgDgDQBWifCohPQCohPCxAjQCsAgCDCEQB+B/AtCvQAzDDhcC+QgXAwgcArQhcAohmAAQgzAAg1gKgAA1HJQgDAHAGADQAHADAFgCQAIgDgCgHQgBgDgDgCQgDgBgDABIgBAAIgDAAQgFAAgCAEgAmPFVIgCACQgDAHAHAEQAHAEADgHIACgCQAEgHgHgEIgFgBQgEAAgCAEgAooEBQgBAHAHACIACABQAFABACgDIACgCQAFgFgFgFQgEgGgGAEIAAAAQgGAAgBAGgAidACIgCACQgDAHAHAEQAHAEADgHIACgCQAEgHgHgDIgFAAQgEAAgCACgAiEhUIgCACQgDAHAHAEQAHAEAEgHIABgCQAEgHgHgEIgFgBQgEAAgCAEgAhsiqQgEAHAHAEQAHAEAEgHQAEgGgHgEIgFgCQgEAAgCAEg");
  this.shape_36.setTransform(78,-189.2);

  this.shape_37 = new cjs.Shape();
  this.shape_37.graphics.f("#000000").s().p("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");
  this.shape_37.setTransform(0.4,0);

  this.shape_38 = new cjs.Shape();
  this.shape_38.graphics.f().s("#333333").p("AgGgDQgEAFAIAEQAFAEAEgHQAEgEgIgEQgEgEgFAGg");
  this.shape_38.setTransform(-217.2,102.4);

  this.shape_39 = new cjs.Shape();
  this.shape_39.graphics.f("#000000").s().p("AgCAGQgIgEAEgFQAFgGAEAEQAIAEgEAEQgDAFgEAAIgCgCg");
  this.shape_39.setTransform(-217.2,102.4);

  this.shape_40 = new cjs.Shape();
  this.shape_40.graphics.f().s("#333333").p("ABCsZQADAVgEAfQgDARgGAiQgLA6gDAZQgIBHAABhQgBCLgMBdQgDAXgNBPQgJA/gDAnQgEBFgICOQgIB6gLBaQgEAkgIBHQgHA/gFAqQgEAagLA5QgJA0AGAfQABAIAIgCQAHgDgBgHQgDgUAFggQAHgjACgQQAIg4ADgcQAEgqAJhIQAKhSADggQAHhDAHiKQAFiJAIhDQADgiANhIQAMhEADgmQAEgoAChDQAChSABgaQAHh/AGgzQAKg2AFgbQAJgygGgfQgBgIgIADQgHACABAHg");
  this.shape_40.setTransform(73.9,-32.9);

  this.shape_41 = new cjs.Shape();
  this.shape_41.graphics.f("#000000").s().p("AhQMeQgGgfAJg0QALg5AEgaIAMhpIAMhrQALhaAIh6IAMjTQADgnAJg/IAQhmQAMhdABiLQAAhhAIhHQADgZALg6IAJgzQAEgfgDgVQgBgHAHgCQAIgDABAIQAGAfgJAyIgPBRQgGAzgHB/IgDBsQgCBDgEAoQgDAmgMBEQgNBIgDAiQgIBDgFCJQgHCKgHBDIgNByQgJBIgEAqQgDAcgIA4IgJAzQgFAgADAUQABAHgHADIgDAAQgFAAgBgGg");
  this.shape_41.setTransform(73.9,-32.9);

  this.shape_42 = new cjs.Shape();
  this.shape_42.graphics.f().s("#333333").p("AgFgEIgBADQgEAFAHAEQAFAEAEgHIABgDQAEgEgHgEQgFgEgEAGg");
  this.shape_42.setTransform(122.6,-143.4);

  this.shape_43 = new cjs.Shape();
  this.shape_43.graphics.f("#000000").s().p("AgDAIQgHgEAEgFIABgDQAEgGAFAEQAHAEgEAEIgBADQgDAEgDAAIgDgBg");
  this.shape_43.setTransform(122.6,-143.4);

  this.shape_44 = new cjs.Shape();
  this.shape_44.graphics.f().s("#333333").p("AgGgDQgDAFAHAEQAFAEADgHQAEgEgHgEQgFgEgEAGg");
  this.shape_44.setTransform(107.3,-141.4);

  this.shape_45 = new cjs.Shape();
  this.shape_45.graphics.f("#000000").s().p("AgCAGQgHgEADgFQAEgGAFAEQAHAEgEAEQgCAFgEAAIgCgCg");
  this.shape_45.setTransform(107.3,-141.4);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-219.1,-241.5,438.3,483.2);


(lib.Tween4 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
  this.shape.setTransform(37.5,-264.8);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_1.setTransform(-212.9,61.4);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_2.setTransform(-64.2,-91.8);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#000000").s().p("AgPAQQgIgHABgJQgBgIAIgHQAGgHAJAAQAJAAAHAHQAIAHgBAIQABAJgIAHQgHAHgJAAQgJAAgGgHg");
  this.shape_3.setTransform(-191.3,-247.8);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#000000").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
  this.shape_4.setTransform(-196.1,-102.5);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_5.setTransform(178.3,11.6);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#000000").s().p("AgPARQgHgIAAgJQAAgIAHgHQAHgIAIAAQAJAAAHAIQAHAGAAAJQAAAJgHAIQgHAGgJAAQgIAAgHgGg");
  this.shape_6.setTransform(212.9,255.9);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_7.setTransform(155.3,211.2);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_8.setTransform(173.5,182.2);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#000000").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
  this.shape_9.setTransform(55,264.8);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#000000").s().p("AgPARQgHgHAAgKQAAgIAHgHQAHgIAIAAQAJAAAHAIQAHAHAAAIQAAAKgHAHQgHAGgJABQgIgBgHgGg");
  this.shape_10.setTransform(59.8,190.4);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
  this.shape_11.setTransform(94.4,54.2);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_12.setTransform(-187.2,211.2);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_13.setTransform(-137.2,258.2);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_14.setTransform(-75.7,160.2);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#000000").s().p("AgQAQQgGgHAAgJQAAgIAGgHQAHgHAJAAQAKAAAGAHQAIAHAAAIQAAAJgIAHQgGAHgKAAQgIAAgIgHg");
  this.shape_15.setTransform(201.7,-238.4);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.3,-267.1,430.6,534.3);


(lib.Tween3 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
  this.shape.setTransform(37.5,-264.8);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_1.setTransform(-212.9,61.4);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_2.setTransform(-64.2,-91.8);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#000000").s().p("AgPAQQgIgHABgJQgBgIAIgHQAGgHAJAAQAJAAAHAHQAIAHgBAIQABAJgIAHQgHAHgJAAQgJAAgGgHg");
  this.shape_3.setTransform(-191.3,-247.8);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#000000").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
  this.shape_4.setTransform(-196.1,-102.6);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_5.setTransform(178.3,11.5);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#000000").s().p("AgPARQgHgIAAgJQAAgIAHgHQAHgIAIAAQAJAAAHAIQAHAGAAAJQAAAJgHAIQgHAGgJAAQgIAAgHgGg");
  this.shape_6.setTransform(212.9,255.8);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_7.setTransform(155.3,211.2);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_8.setTransform(173.5,182.2);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#000000").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
  this.shape_9.setTransform(55,264.8);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#000000").s().p("AgPARQgHgHAAgKQAAgIAHgHQAHgIAIAAQAJAAAHAIQAHAHAAAIQAAAKgHAHQgHAGgJABQgIgBgHgGg");
  this.shape_10.setTransform(59.8,190.3);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
  this.shape_11.setTransform(94.4,54.2);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_12.setTransform(-187.2,211.2);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_13.setTransform(-137.2,258.2);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_14.setTransform(-75.7,160.2);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#000000").s().p("AgQAQQgGgHAAgJQAAgIAGgHQAHgHAJAAQAKAAAGAHQAIAHAAAIQAAAJgIAHQgGAHgKAAQgIAAgIgHg");
  this.shape_15.setTransform(201.7,-238.4);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.3,-267.2,430.6,534.3);


(lib.Tween2 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
  this.shape.setTransform(37.5,-264.8);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_1.setTransform(-212.9,61.4);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_2.setTransform(-64.2,-91.8);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#000000").s().p("AgPAQQgIgHABgJQgBgIAIgHQAGgHAJAAQAJAAAHAHQAIAHgBAIQABAJgIAHQgHAHgJAAQgJAAgGgHg");
  this.shape_3.setTransform(-191.3,-247.8);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#000000").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
  this.shape_4.setTransform(-196.1,-102.5);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_5.setTransform(178.3,11.6);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#000000").s().p("AgPARQgHgIAAgJQAAgIAHgHQAHgIAIAAQAJAAAHAIQAHAGAAAJQAAAJgHAIQgHAGgJAAQgIAAgHgGg");
  this.shape_6.setTransform(212.9,255.9);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_7.setTransform(155.3,211.2);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_8.setTransform(173.5,182.2);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#000000").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
  this.shape_9.setTransform(55,264.8);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#000000").s().p("AgPARQgHgHAAgKQAAgIAHgHQAHgIAIAAQAJAAAHAIQAHAHAAAIQAAAKgHAHQgHAGgJABQgIgBgHgGg");
  this.shape_10.setTransform(59.8,190.4);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
  this.shape_11.setTransform(94.4,54.2);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_12.setTransform(-187.2,211.2);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_13.setTransform(-137.2,258.2);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_14.setTransform(-75.7,160.2);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#000000").s().p("AgQAQQgGgHAAgJQAAgIAGgHQAHgHAJAAQAKAAAGAHQAIAHAAAIQAAAJgIAHQgGAHgKAAQgIAAgIgHg");
  this.shape_15.setTransform(201.7,-238.4);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.3,-267.1,430.6,534.3);


(lib.Tween1 = function(mode,startPosition,loop) {
  this.initialize(mode,startPosition,loop,{});

  // Layer 1
  this.shape = new cjs.Shape();
  this.shape.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
  this.shape.setTransform(37.5,-264.8);

  this.shape_1 = new cjs.Shape();
  this.shape_1.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_1.setTransform(-212.9,61.4);

  this.shape_2 = new cjs.Shape();
  this.shape_2.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_2.setTransform(-64.2,-91.8);

  this.shape_3 = new cjs.Shape();
  this.shape_3.graphics.f("#000000").s().p("AgPAQQgIgHABgJQgBgIAIgHQAGgHAJAAQAJAAAHAHQAIAHgBAIQABAJgIAHQgHAHgJAAQgJAAgGgHg");
  this.shape_3.setTransform(-191.3,-247.8);

  this.shape_4 = new cjs.Shape();
  this.shape_4.graphics.f("#000000").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
  this.shape_4.setTransform(-196.1,-102.5);

  this.shape_5 = new cjs.Shape();
  this.shape_5.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_5.setTransform(178.3,11.6);

  this.shape_6 = new cjs.Shape();
  this.shape_6.graphics.f("#000000").s().p("AgPARQgHgIAAgJQAAgIAHgHQAHgIAIAAQAJAAAHAIQAHAGAAAJQAAAJgHAIQgHAGgJAAQgIAAgHgGg");
  this.shape_6.setTransform(212.9,255.9);

  this.shape_7 = new cjs.Shape();
  this.shape_7.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_7.setTransform(155.3,211.2);

  this.shape_8 = new cjs.Shape();
  this.shape_8.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_8.setTransform(173.5,182.2);

  this.shape_9 = new cjs.Shape();
  this.shape_9.graphics.f("#000000").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
  this.shape_9.setTransform(55,264.8);

  this.shape_10 = new cjs.Shape();
  this.shape_10.graphics.f("#000000").s().p("AgPARQgHgHAAgKQAAgIAHgHQAHgIAIAAQAJAAAHAIQAHAHAAAIQAAAKgHAHQgHAGgJABQgIgBgHgGg");
  this.shape_10.setTransform(59.8,190.4);

  this.shape_11 = new cjs.Shape();
  this.shape_11.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
  this.shape_11.setTransform(94.4,54.2);

  this.shape_12 = new cjs.Shape();
  this.shape_12.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_12.setTransform(-187.2,211.2);

  this.shape_13 = new cjs.Shape();
  this.shape_13.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_13.setTransform(-137.2,258.2);

  this.shape_14 = new cjs.Shape();
  this.shape_14.graphics.f("#000000").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
  this.shape_14.setTransform(-75.7,160.2);

  this.shape_15 = new cjs.Shape();
  this.shape_15.graphics.f("#000000").s().p("AgQAQQgGgHAAgJQAAgIAGgHQAHgHAJAAQAKAAAGAHQAIAHAAAIQAAAJgIAHQgGAHgKAAQgIAAgIgHg");
  this.shape_15.setTransform(201.7,-238.4);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.3,-267.1,430.6,534.3);


// stage content:
(lib.Sputnik2 = function(mode,startPosition,loop) {
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
  this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(74));

  // home-intro
  this.instance = new lib.Tween5("synched",0);
  this.instance.parent = this;
  this.instance.setTransform(243.6,306.6);

  this.instance_1 = new lib.Tween7("synched",0);
  this.instance_1.parent = this;
  this.instance_1.setTransform(243.6,306.6);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:306.5},0).wait(1).to({x:243.4,y:306.4},0).wait(1).to({x:243.3,y:306.2},0).wait(1).to({x:243,y:305.9},0).wait(1).to({x:242.6,y:305.6},0).wait(1).to({x:242.3,y:305.2},0).wait(1).to({x:241.9,y:304.9},0).wait(1).to({x:241.6,y:304.5},0).wait(1).to({x:241.3,y:304.3},0).wait(1).to({x:241.1,y:304},0).wait(1).to({x:240.9,y:303.9},0).wait(1).to({x:240.8,y:303.7},0).wait(1).to({x:240.7,y:303.6},0).wait(1).to({x:240.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:240.7,y:303.7},0).wait(1).to({x:240.8,y:303.8},0).wait(1).to({x:241,y:303.9},0).wait(1).to({x:241.1,y:304.1},0).wait(1).to({x:241.3,y:304.3},0).wait(1).to({x:241.6,y:304.5},0).wait(1).to({x:241.8,y:304.7},0).wait(1).to({x:242,y:305},0).wait(1).to({x:242.3,y:305.2},0).wait(1).to({x:242.5,y:305.5},0).wait(1).to({x:242.7,y:305.7},0).wait(1).to({x:242.9,y:305.9},0).wait(1).to({x:243.1,y:306},0).wait(1).to({x:243.2,y:306.2},0).wait(1).to({x:243.3,y:306.3},0).wait(1).to({x:243.4,y:306.4},0).wait(1).to({x:243.5},0).wait(1).to({y:306.5},0).wait(1).to({x:243.6},0).wait(1).to({y:306.6},0).wait(1).to({y:306.5},0).wait(1).to({x:243.5,y:306.4},0).wait(1).to({y:306.3},0).wait(1).to({x:243.4,y:306.2},0).wait(1).to({x:243.3,y:306},0).wait(1).to({x:243.2,y:305.7},0).wait(1).to({x:243.1,y:305.5},0).wait(1).to({x:242.9,y:305.1},0).wait(1).to({x:242.7,y:304.8},0).wait(1).to({x:242.5,y:304.4},0).wait(1).to({x:242.3,y:304},0).wait(1).to({x:242.2,y:303.7},0).wait(1).to({x:242,y:303.4},0).wait(1).to({x:241.9,y:303.1},0).wait(1).to({x:241.8,y:302.9},0).wait(1).to({x:241.7,y:302.8},0).wait(1).to({y:302.7},0).wait(1).to({x:241.6,y:302.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:241.7,y:302.7},0).wait(1).to({y:302.8},0).wait(1).to({x:241.8,y:303},0).wait(1).to({x:241.9,y:303.2},0).wait(1).to({x:242,y:303.4},0).wait(1).to({x:242.1,y:303.6},0).wait(1).to({x:242.3,y:303.9},0).wait(1).to({x:242.4,y:304.2},0).wait(1).to({x:242.6,y:304.5},0).wait(1).to({x:242.7,y:304.8},0).wait(1).to({x:242.9,y:305.1},0).wait(1).to({x:243,y:305.4},0).wait(1).to({x:243.2,y:305.7},0).wait(1).to({x:243.3,y:305.9},0).wait(1).to({x:243.4,y:306.1},0).wait(1).to({x:243.5,y:306.3},0).wait(1).to({x:243.6,y:306.5},0).to({_off:true},1).wait(1));

  // Layer 2 copy
  this.instance_2 = new lib.Tween1("synched",0);
  this.instance_2.parent = this;
  this.instance_2.setTransform(384.5,-285.1);

  this.instance_3 = new lib.Tween2("synched",0);
  this.instance_3.parent = this;
  this.instance_3.setTransform(-94.5,1508.1);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},74).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:-94.5,y:1508.1},74).wait(1));

  // Layer 2
  this.instance_4 = new lib.Tween3("synched",0);
  this.instance_4.parent = this;
  this.instance_4.setTransform(578.5,-907);

  this.instance_5 = new lib.Tween4("synched",0);
  this.instance_5.parent = this;
  this.instance_5.setTransform(100.4,885.2);

  this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},74).wait(1));
  this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,x:100.4,y:885.2},74).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(279.5,-879.2,769.3,1722.4);

})(whyLib = whyLib||{}, whyImages = whyImages||{}, createjs = createjs||{}, ss = ss||{});
var whyLib, whyImages, createjs, ss;
