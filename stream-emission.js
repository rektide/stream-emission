var Readable= require("stream").Readable

function streamEmission(emitter){
	emitter.on("newListener", function(event){
		if(!emitter[event]){
			var stream= new Readable()
			emitter[event]= stream
			emitter.on(event, function(data){
				stream.push(data)
			})
		}
	})
}
module.exports= streamEmission
