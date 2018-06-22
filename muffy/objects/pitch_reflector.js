function LaptopPitchReflector(p){
	var vol = 0.5;
	if (p<30){p*=2};
	if (p>400){p/=2};
	p = Math.floor(p);
		
		switch(p) {
		// E2 OK
		//case 15:
		//case 28:
		case 56:
		case 224:
		case 225:
		case 226:
		case 450:
			return(1.26);
			break;
		// G#2 OK
		//case 18:
		case 35:
		case 71:
		case 283:
		case 566:
			return(1.587);
			break;
		// C3 OK
		//case 22:
		case 44:
		case 89:
		case 178:
		case 367:
		case 674:
			return(1.0);
			break;
		// D3 OK
		//case 25:
		case 50:
		case 100:
		case 200:
		case 401:
		case 802:
			return(1.118);
			break;
		// A#2 OK
		//case 20:
		case 40:
		case 79:
		case 80:
		case 159:
		case 318:			
			return(1.782);
			break;
		// D#3 OK
		//case 26:
		//case 27:
		case 53:
		case 106:
		case 212:
		case 424:
		case 425:
			return(1.1892);
			break;
		// F2 OK
		//case 30:
		case 60:
		case 119:
		case 238:
		case 239:
		case 477:
			return(1.334);
			break;
		// C#3 OK
		case 47:
		case 94:
		case 188:
		case 379:
		case 425:
			return(1.06);
			break;
		// F#2 OK
		//case 16:
		case 31:
		case 62:
		case 126:
		case 252:
		case 505:
			return(1.414);
			break;
		// G2 OK
		//case 17:
		case 33:
		case 67:
		case 134:
		case 268:
		case 535:
			return(1.497);
			break;
		// A2 OK
		case 37:
		case 38:
		case 75:
		case 150:
		case 300:
		case 600:
			return(1.682);
			break;
		// B2
		case 42:
		case 84:
		case 168:
		case 336:
			return(1.888);
			break;
		
		
		default:
			return('error');
		}
}
  
function pitchReflector(p){
	// takes strongest pitch, returns scaling ratio for playback
	var vol = 0.5;
	if (p<30){p*=2};
	if (p>400){p/=2};
	p = Math.floor(p);
		switch(p) {
		// E2 OK
		//case 15:
		case 30:
		case 61:
		case 122:
		case 244:
		case 245:
		case 246:
			//osc.amp(vol)
			//osc.freq(82); 
			return(1.26);
			break;
		// G#2 OK
		case 19:
		case 39:
		case 77:
		case 153:
		case 154:
		case 155:
			//osc.amp(vol)
			//osc.freq(104); 
			return(1.587);
			break;
		// C3 OK
		case 24:
		case 48:
		case 96:
		case 191:
		case 192:
		case 193:
			//osc.amp(vol)
			//osc.freq(131); 
			return(1.0);
			break;
		// D3 OK
		case 14:
		case 27:
		case 55:
		case 108:
		case 109:
		case 110:
			//osc.amp(vol)
			//osc.freq(147); 
			return(1.118);
			break;
		// A#2 OK
		case 21:
		case 43:
		case 86:
		case 171:
		case 172:
		case 173:			
			//osc.amp(vol)
			//osc.freq(117); 
			return(1.782);
			break;
		// D#3 OK
		case 29:
		case 58:
		case 115:
		case 116:
		case 117:
			//osc.amp(vol)
			//osc.freq(156); 
			return(1.1892);
			break;
		// F2 OK
		case 16:
		case 32:
		case 65:
		case 129:
		case 130:
		case 131:
			//osc.amp(vol)
			//osc.freq(87); 
			return(1.334);
			break;
		// C#3 OK
		case 26:
		case 51:
		case 102:
		case 203:
		case 204:
		case 205:
			//osc.amp(vol)
			//osc.freq(139); 
			return(1.06);
			break;
		// F#2 OK
		case 17:
		case 34:
		case 68:
		case 135:
		case 136:
		case 137:
			//osc.amp(vol)
			//osc.freq(93); 
			return(1.414);
			break;
		// G2 OK
		case 18:
		case 36:
		case 72:
		case 143:
		case 144:
		case 145:
			//osc.amp(vol)
			//osc.freq(98); 
			return(1.497);
			break;
		// A2 OK
		case 20:
		case 40:
		case 80:
		case 159:
		case 160:
		case 161:
			//osc.amp(vol)
			//osc.freq(110); 
			return(1.682);
			break;
		// B2
		case 23:
		case 46:
		case 92:
		case 183:
		case 184:
		case 185:
			//osc.amp(vol)
			//osc.freq(124); 
			return(1.888);
			break;
		
		
		default:
			return('error');
		}
}