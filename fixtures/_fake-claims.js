// import faker from '@faker-js/faker';
//
// faker.extensions = {
// 	arrayOf,
// 	randomId
// };
//
// let fakes = faker.extensions.arrayOf(50, () => ({
// 	id: faker.extensions.randomId(),
// 	content: faker.hacker.phrase(),
//
// 	createdAt: faker.date.past().getTime(),
//
// 	author: {
// 		name: faker.helpers.userCard().name,
// 		profileImageUrl: 'https://thispersondoesnotexist.com/image'
// 	}
// }));
//
// fakes = fakes.map((fake) => ({
// 	...fake,
// 	usedAt: getRandomClaimRefs({ max: 5 }),
// 	usedHere: getRandomClaimRefs({ max: 5,
// 		map: (ref) => ({ ...ref, power: Math.floor(Math.random() * 10) * (Math.floor(Math.random() * 5) % 5 ? 1 : 5) })
// 	})
// }));
//
// debugger;
//
// function getRandomClaimRefs({ max = 10, map = (x)=>x }) {
// 	return faker.extensions.arrayOf({ min: 0, max }, () => fakes[Math.floor(Math.random() * (fakes.length))].id)
// 		.reduce((accu, id) => {
// 			// populate random ids with their content
// 			if (!accu.map((claim) => claim.id).includes(id)) accu.push({ id, content: fakes.find((fake) => fake.id === id).content });
// 			return accu;
// 		}, [])
// 		.reduce((accu, ref) => {
// 			accu[Object.keys(accu)[Math.floor(Math.random() * 2)]].push(map(ref));
// 			return accu;
// 		}, { support: [], opposition: [] });
// }
//
// function arrayOf(times, fillerFn) {
// 	times = (typeof times === 'number') ? { min: times, max: times } : times;
// 	return Array(faker.datatype.number(times)).fill(null).map(fillerFn);
// }
//
// function randomId() {
// 	return Math.random().toString(36).substring(2, 18);
// }

export default [
	{
		"id": "j55a6d98axk",
		"content": "Try to quantify the PNG pixel, maybe it will quantify the multi-byte bus!",
		"createdAt": 1628542453291,
		"author": {
			"name": "Lora O'Hara",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "q9mrqb4q60b",
					"content": "You can't hack the capacitor without transmitting the redundant SMS hard drive!"
				}
			],
			"opposition": [
				{
					"id": "ax6popf8b2",
					"content": "Use the wireless USB hard drive, then you can quantify the virtual bandwidth!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "yu8toemd1q8",
		"content": "We need to compress the auxiliary CSS circuit!",
		"createdAt": 1630686835950,
		"author": {
			"name": "Sylvester Wunsch",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "lukujzfvtr",
					"content": "You can't index the alarm without parsing the back-end SSL alarm!"
				},
				{
					"id": "q9mrqb4q60b",
					"content": "You can't hack the capacitor without transmitting the redundant SMS hard drive!"
				}
			],
			"opposition": [
				{
					"id": "4jhq956i0aw",
					"content": "If we override the hard drive, we can get to the PCI circuit through the solid state PCI pixel!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "tv1txaauu7l",
					"content": "Try to compress the PNG monitor, maybe it will back up the back-end hard drive!",
					"power": 5
				},
				{
					"id": "n7fgzleo2a",
					"content": "You can't input the array without programming the optical PCI interface!",
					"power": 20
				}
			],
			"opposition": [
				{
					"id": "ox4vv3wqzj",
					"content": "I'll hack the primary CSS bus, that should hard drive the SQL card!",
					"power": 0
				}
			]
		}
	},
	{
		"id": "g8xw8h0ywcm",
		"content": "Try to copy the PCI bus, maybe it will navigate the cross-platform panel!",
		"createdAt": 1635223665269,
		"author": {
			"name": "Erica Reilly",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "5xe89fsnxhp",
					"content": "Use the mobile XML microchip, then you can back up the solid state protocol!",
					"power": 3
				},
				{
					"id": "bxjfiupcqf",
					"content": "I'll compress the mobile IB bandwidth, that should protocol the FTP firewall!",
					"power": 3
				}
			],
			"opposition": [
				{
					"id": "plcg0umb14i",
					"content": "Try to calculate the IB sensor, maybe it will transmit the wireless hard drive!",
					"power": 2
				}
			]
		}
	},
	{
		"id": "5xe89fsnxhp",
		"content": "Use the mobile XML microchip, then you can back up the solid state protocol!",
		"createdAt": 1643390382558,
		"author": {
			"name": "Jon Abshire",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "5xe89fsnxhp",
					"content": "Use the mobile XML microchip, then you can back up the solid state protocol!"
				}
			],
			"opposition": [
				{
					"id": "giq2fwvtk6a",
					"content": "Use the back-end COM firewall, then you can transmit the digital interface!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "hc6xpuirvm",
					"content": "connecting the hard drive won't do anything, we need to connect the cross-platform HTTP bus!",
					"power": 7
				}
			],
			"opposition": [
				{
					"id": "1s7knmd9o1y",
					"content": "Use the multi-byte PNG feed, then you can bypass the cross-platform array!",
					"power": 4
				},
				{
					"id": "x8j2bockhz",
					"content": "overriding the alarm won't do anything, we need to index the bluetooth AGP capacitor!",
					"power": 9
				}
			]
		}
	},
	{
		"id": "tyx16zxqmms",
		"content": "We need to quantify the haptic AGP firewall!",
		"createdAt": 1640538666047,
		"author": {
			"name": "Lillian Mayert",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "u9fa30018yp",
					"content": "Try to compress the HDD array, maybe it will program the haptic sensor!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "ox4vv3wqzj",
					"content": "I'll hack the primary CSS bus, that should hard drive the SQL card!",
					"power": 20
				},
				{
					"id": "0f9347bd1gb",
					"content": "If we transmit the card, we can get to the JSON monitor through the 1080p ADP alarm!",
					"power": 15
				}
			],
			"opposition": [
				{
					"id": "tyx16zxqmms",
					"content": "We need to quantify the haptic AGP firewall!",
					"power": 20
				}
			]
		}
	},
	{
		"id": "grwfn8xk4k",
		"content": "I'll synthesize the redundant SDD bus, that should card the COM hard drive!",
		"createdAt": 1621322464505,
		"author": {
			"name": "Mable Lakin",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "aknljdjdmzk",
					"content": "We need to copy the back-end PCI pixel!"
				},
				{
					"id": "x8j2bockhz",
					"content": "overriding the alarm won't do anything, we need to index the bluetooth AGP capacitor!"
				},
				{
					"id": "bu8gay43fav",
					"content": "I'll input the wireless SSL bus, that should matrix the AGP bus!"
				},
				{
					"id": "g5cr7mf592s",
					"content": "Try to compress the SMS pixel, maybe it will hack the optical capacitor!"
				}
			],
			"opposition": [
				{
					"id": "u9fa30018yp",
					"content": "Try to compress the HDD array, maybe it will program the haptic sensor!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "tv1txaauu7l",
		"content": "Try to compress the PNG monitor, maybe it will back up the back-end hard drive!",
		"createdAt": 1621201516289,
		"author": {
			"name": "Enrique Haag",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "4jhq956i0aw",
					"content": "If we override the hard drive, we can get to the PCI circuit through the solid state PCI pixel!",
					"power": 10
				},
				{
					"id": "7a4f2crhry4",
					"content": "Use the mobile AGP monitor, then you can index the cross-platform system!",
					"power": 0
				},
				{
					"id": "q9mrqb4q60b",
					"content": "You can't hack the capacitor without transmitting the redundant SMS hard drive!",
					"power": 1
				},
				{
					"id": "bct57apoql5",
					"content": "Use the multi-byte SSL port, then you can input the haptic bus!",
					"power": 5
				}
			],
			"opposition": [
				{
					"id": "5djgq76ohpu",
					"content": "We need to transmit the wireless RAM array!",
					"power": 0
				}
			]
		}
	},
	{
		"id": "7a4f2crhry4",
		"content": "Use the mobile AGP monitor, then you can index the cross-platform system!",
		"createdAt": 1636506465784,
		"author": {
			"name": "Lorenzo Bayer",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "wdlzw64cwqm",
					"content": "If we connect the capacitor, we can get to the AI driver through the digital SMS application!"
				},
				{
					"id": "ygsvmqxkax",
					"content": "We need to override the digital PNG sensor!"
				}
			],
			"opposition": [
				{
					"id": "grwfn8xk4k",
					"content": "I'll synthesize the redundant SDD bus, that should card the COM hard drive!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "s77ftsmfokh",
					"content": "I'll input the online SCSI transmitter, that should microchip the XSS monitor!",
					"power": 3
				},
				{
					"id": "plcg0umb14i",
					"content": "Try to calculate the IB sensor, maybe it will transmit the wireless hard drive!",
					"power": 5
				}
			],
			"opposition": [
				{
					"id": "27u226ieq1h",
					"content": "Use the back-end SQL firewall, then you can reboot the neural monitor!",
					"power": 9
				},
				{
					"id": "lukujzfvtr",
					"content": "You can't index the alarm without parsing the back-end SSL alarm!",
					"power": 3
				}
			]
		}
	},
	{
		"id": "q9mrqb4q60b",
		"content": "You can't hack the capacitor without transmitting the redundant SMS hard drive!",
		"createdAt": 1628122417486,
		"author": {
			"name": "Noah Kuhn",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "511dr99izpv",
					"content": "Use the auxiliary ADP interface, then you can program the redundant system!"
				},
				{
					"id": "haisipnotpq",
					"content": "hacking the system won't do anything, we need to synthesize the optical XSS capacitor!"
				},
				{
					"id": "plcg0umb14i",
					"content": "Try to calculate the IB sensor, maybe it will transmit the wireless hard drive!"
				}
			],
			"opposition": [
				{
					"id": "k135mkn7si",
					"content": "You can't input the bandwidth without overriding the bluetooth JSON firewall!"
				},
				{
					"id": "k205xu9lage",
					"content": "Use the virtual SQL bandwidth, then you can reboot the redundant program!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "zlg9h3ujpfc",
					"content": "Use the mobile FTP card, then you can generate the 1080p driver!",
					"power": 45
				}
			],
			"opposition": [
				{
					"id": "7ar9mk7d7mb",
					"content": "You can't transmit the driver without generating the online SQL alarm!",
					"power": 7
				}
			]
		}
	},
	{
		"id": "wdlzw64cwqm",
		"content": "If we connect the capacitor, we can get to the AI driver through the digital SMS application!",
		"createdAt": 1623378404168,
		"author": {
			"name": "Andre Bogan",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "0yifx1qn6ls",
					"content": "The XML sensor is down, program the optical matrix so we can back up the SDD driver!"
				}
			],
			"opposition": [
				{
					"id": "5oax5v5vxqp",
					"content": "If we reboot the feed, we can get to the SMTP circuit through the wireless SCSI card!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "8mshnbexqgw",
					"content": "You can't navigate the system without compressing the mobile RSS bandwidth!",
					"power": 4
				}
			]
		}
	},
	{
		"id": "0yifx1qn6ls",
		"content": "The XML sensor is down, program the optical matrix so we can back up the SDD driver!",
		"createdAt": 1642391633611,
		"author": {
			"name": "Elizabeth Legros",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": [
				{
					"id": "8mshnbexqgw",
					"content": "You can't navigate the system without compressing the mobile RSS bandwidth!"
				},
				{
					"id": "27u226ieq1h",
					"content": "Use the back-end SQL firewall, then you can reboot the neural monitor!"
				},
				{
					"id": "j55a6d98axk",
					"content": "Try to quantify the PNG pixel, maybe it will quantify the multi-byte bus!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "plcg0umb14i",
		"content": "Try to calculate the IB sensor, maybe it will transmit the wireless hard drive!",
		"createdAt": 1613034464077,
		"author": {
			"name": "Miss Gilberto West",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "s77ftsmfokh",
					"content": "I'll input the online SCSI transmitter, that should microchip the XSS monitor!"
				},
				{
					"id": "jy66sceq0z",
					"content": "If we program the transmitter, we can get to the XSS hard drive through the solid state AI card!"
				}
			],
			"opposition": [
				{
					"id": "g8xw8h0ywcm",
					"content": "Try to copy the PCI bus, maybe it will navigate the cross-platform panel!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "511dr99izpv",
					"content": "Use the auxiliary ADP interface, then you can program the redundant system!",
					"power": 2
				},
				{
					"id": "haisipnotpq",
					"content": "hacking the system won't do anything, we need to synthesize the optical XSS capacitor!",
					"power": 7
				},
				{
					"id": "ygsvmqxkax",
					"content": "We need to override the digital PNG sensor!",
					"power": 15
				}
			]
		}
	},
	{
		"id": "n7fgzleo2a",
		"content": "You can't input the array without programming the optical PCI interface!",
		"createdAt": 1626372748307,
		"author": {
			"name": "Wade Roberts",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "xopxm0kbyqk",
					"content": "We need to calculate the optical SCSI bus!"
				}
			],
			"opposition": [
				{
					"id": "aknljdjdmzk",
					"content": "We need to copy the back-end PCI pixel!"
				},
				{
					"id": "bxjfiupcqf",
					"content": "I'll compress the mobile IB bandwidth, that should protocol the FTP firewall!"
				},
				{
					"id": "k135mkn7si",
					"content": "You can't input the bandwidth without overriding the bluetooth JSON firewall!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "bxjfiupcqf",
		"content": "I'll compress the mobile IB bandwidth, that should protocol the FTP firewall!",
		"createdAt": 1638189525078,
		"author": {
			"name": "Clyde Walker",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "wdlzw64cwqm",
					"content": "If we connect the capacitor, we can get to the AI driver through the digital SMS application!"
				},
				{
					"id": "lukujzfvtr",
					"content": "You can't index the alarm without parsing the back-end SSL alarm!"
				}
			],
			"opposition": [
				{
					"id": "ygsvmqxkax",
					"content": "We need to override the digital PNG sensor!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "511dr99izpv",
					"content": "Use the auxiliary ADP interface, then you can program the redundant system!",
					"power": 7
				},
				{
					"id": "j55a6d98axk",
					"content": "Try to quantify the PNG pixel, maybe it will quantify the multi-byte bus!",
					"power": 6
				},
				{
					"id": "k205xu9lage",
					"content": "Use the virtual SQL bandwidth, then you can reboot the redundant program!",
					"power": 20
				},
				{
					"id": "lukujzfvtr",
					"content": "You can't index the alarm without parsing the back-end SSL alarm!",
					"power": 10
				},
				{
					"id": "sy1nf3mx93t",
					"content": "Try to navigate the XSS protocol, maybe it will calculate the online alarm!",
					"power": 30
				}
			]
		}
	},
	{
		"id": "1s7knmd9o1y",
		"content": "Use the multi-byte PNG feed, then you can bypass the cross-platform array!",
		"createdAt": 1621090116666,
		"author": {
			"name": "Viola Rippin",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "yu8toemd1q8",
					"content": "We need to compress the auxiliary CSS circuit!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "xopxm0kbyqk",
					"content": "We need to calculate the optical SCSI bus!",
					"power": 2
				},
				{
					"id": "5xe89fsnxhp",
					"content": "Use the mobile XML microchip, then you can back up the solid state protocol!",
					"power": 0
				}
			],
			"opposition": [
				{
					"id": "ax6popf8b2",
					"content": "Use the wireless USB hard drive, then you can quantify the virtual bandwidth!",
					"power": 6
				},
				{
					"id": "511dr99izpv",
					"content": "Use the auxiliary ADP interface, then you can program the redundant system!",
					"power": 40
				}
			]
		}
	},
	{
		"id": "xopxm0kbyqk",
		"content": "We need to calculate the optical SCSI bus!",
		"createdAt": 1624381687712,
		"author": {
			"name": "Dr. Joanna Ferry",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": [
				{
					"id": "sy1nf3mx93t",
					"content": "Try to navigate the XSS protocol, maybe it will calculate the online alarm!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "a1cnx1utorl",
					"content": "The SMTP feed is down, hack the wireless driver so we can navigate the XML interface!",
					"power": 45
				}
			]
		}
	},
	{
		"id": "u9fa30018yp",
		"content": "Try to compress the HDD array, maybe it will program the haptic sensor!",
		"createdAt": 1635469817570,
		"author": {
			"name": "Alberta Mertz",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "2pycu7lf4gy",
					"content": "Try to navigate the SAS transmitter, maybe it will quantify the wireless bus!"
				}
			],
			"opposition": [
				{
					"id": "jy66sceq0z",
					"content": "If we program the transmitter, we can get to the XSS hard drive through the solid state AI card!"
				},
				{
					"id": "a1cnx1utorl",
					"content": "The SMTP feed is down, hack the wireless driver so we can navigate the XML interface!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "g5cr7mf592s",
					"content": "Try to compress the SMS pixel, maybe it will hack the optical capacitor!",
					"power": 2
				}
			],
			"opposition": [
				{
					"id": "5djgq76ohpu",
					"content": "We need to transmit the wireless RAM array!",
					"power": 7
				},
				{
					"id": "xopxm0kbyqk",
					"content": "We need to calculate the optical SCSI bus!",
					"power": 7
				}
			]
		}
	},
	{
		"id": "5djgq76ohpu",
		"content": "We need to transmit the wireless RAM array!",
		"createdAt": 1642256251561,
		"author": {
			"name": "Sergio Price",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "mfromiakjy",
		"content": "If we input the monitor, we can get to the PNG feed through the primary GB firewall!",
		"createdAt": 1631839270396,
		"author": {
			"name": "Marion Franey",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "27u226ieq1h",
					"content": "Use the back-end SQL firewall, then you can reboot the neural monitor!"
				},
				{
					"id": "9dugt0cadlu",
					"content": "I'll transmit the mobile JSON firewall, that should circuit the THX feed!"
				}
			],
			"opposition": [
				{
					"id": "2pycu7lf4gy",
					"content": "Try to navigate the SAS transmitter, maybe it will quantify the wireless bus!"
				},
				{
					"id": "jy66sceq0z",
					"content": "If we program the transmitter, we can get to the XSS hard drive through the solid state AI card!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "giq2fwvtk6a",
					"content": "Use the back-end COM firewall, then you can transmit the digital interface!",
					"power": 1
				}
			],
			"opposition": []
		}
	},
	{
		"id": "bwjxtboowpa",
		"content": "Try to override the SMTP matrix, maybe it will navigate the virtual alarm!",
		"createdAt": 1618614526321,
		"author": {
			"name": "Virgil Douglas I",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "9dugt0cadlu",
					"content": "I'll transmit the mobile JSON firewall, that should circuit the THX feed!"
				},
				{
					"id": "4jhq956i0aw",
					"content": "If we override the hard drive, we can get to the PCI circuit through the solid state PCI pixel!"
				},
				{
					"id": "j43bz27pzp",
					"content": "If we transmit the capacitor, we can get to the CSS firewall through the virtual EXE card!"
				}
			],
			"opposition": [
				{
					"id": "g5cr7mf592s",
					"content": "Try to compress the SMS pixel, maybe it will hack the optical capacitor!"
				},
				{
					"id": "7ar9mk7d7mb",
					"content": "You can't transmit the driver without generating the online SQL alarm!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "plcg0umb14i",
					"content": "Try to calculate the IB sensor, maybe it will transmit the wireless hard drive!",
					"power": 3
				}
			],
			"opposition": []
		}
	},
	{
		"id": "ox4vv3wqzj",
		"content": "I'll hack the primary CSS bus, that should hard drive the SQL card!",
		"createdAt": 1630328061859,
		"author": {
			"name": "Perry Yost III",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "k205xu9lage",
					"content": "Use the virtual SQL bandwidth, then you can reboot the redundant program!"
				},
				{
					"id": "hc6xpuirvm",
					"content": "connecting the hard drive won't do anything, we need to connect the cross-platform HTTP bus!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "lukujzfvtr",
					"content": "You can't index the alarm without parsing the back-end SSL alarm!",
					"power": 2
				},
				{
					"id": "ygsvmqxkax",
					"content": "We need to override the digital PNG sensor!",
					"power": 2
				},
				{
					"id": "plcg0umb14i",
					"content": "Try to calculate the IB sensor, maybe it will transmit the wireless hard drive!",
					"power": 7
				}
			]
		}
	},
	{
		"id": "sy1nf3mx93t",
		"content": "Try to navigate the XSS protocol, maybe it will calculate the online alarm!",
		"createdAt": 1639392299735,
		"author": {
			"name": "Mr. Eduardo Fisher",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": [
				{
					"id": "xopxm0kbyqk",
					"content": "We need to calculate the optical SCSI bus!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "x8j2bockhz",
					"content": "overriding the alarm won't do anything, we need to index the bluetooth AGP capacitor!",
					"power": 5
				}
			],
			"opposition": [
				{
					"id": "tyx16zxqmms",
					"content": "We need to quantify the haptic AGP firewall!",
					"power": 30
				},
				{
					"id": "2pycu7lf4gy",
					"content": "Try to navigate the SAS transmitter, maybe it will quantify the wireless bus!",
					"power": 0
				}
			]
		}
	},
	{
		"id": "4jhq956i0aw",
		"content": "If we override the hard drive, we can get to the PCI circuit through the solid state PCI pixel!",
		"createdAt": 1621808399729,
		"author": {
			"name": "Jamie Schaden",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "te67wietqo",
					"content": "We need to compress the auxiliary HDD capacitor!"
				}
			],
			"opposition": [
				{
					"id": "yu8toemd1q8",
					"content": "We need to compress the auxiliary CSS circuit!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "tv1txaauu7l",
					"content": "Try to compress the PNG monitor, maybe it will back up the back-end hard drive!",
					"power": 4
				},
				{
					"id": "wdlzw64cwqm",
					"content": "If we connect the capacitor, we can get to the AI driver through the digital SMS application!",
					"power": 1
				}
			]
		}
	},
	{
		"id": "hc6xpuirvm",
		"content": "connecting the hard drive won't do anything, we need to connect the cross-platform HTTP bus!",
		"createdAt": 1628794663742,
		"author": {
			"name": "Richard Bernhard",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "2pycu7lf4gy",
		"content": "Try to navigate the SAS transmitter, maybe it will quantify the wireless bus!",
		"createdAt": 1619273910912,
		"author": {
			"name": "Vanessa Abernathy",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "bct57apoql5",
					"content": "Use the multi-byte SSL port, then you can input the haptic bus!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "wdlzw64cwqm",
					"content": "If we connect the capacitor, we can get to the AI driver through the digital SMS application!",
					"power": 7
				}
			]
		}
	},
	{
		"id": "lukujzfvtr",
		"content": "You can't index the alarm without parsing the back-end SSL alarm!",
		"createdAt": 1625965989944,
		"author": {
			"name": "Blake Hirthe",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "k205xu9lage",
					"content": "Use the virtual SQL bandwidth, then you can reboot the redundant program!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "mfromiakjy",
					"content": "If we input the monitor, we can get to the PNG feed through the primary GB firewall!",
					"power": 8
				}
			],
			"opposition": [
				{
					"id": "bxjfiupcqf",
					"content": "I'll compress the mobile IB bandwidth, that should protocol the FTP firewall!",
					"power": 8
				},
				{
					"id": "27u226ieq1h",
					"content": "Use the back-end SQL firewall, then you can reboot the neural monitor!",
					"power": 45
				},
				{
					"id": "j55a6d98axk",
					"content": "Try to quantify the PNG pixel, maybe it will quantify the multi-byte bus!",
					"power": 20
				}
			]
		}
	},
	{
		"id": "ax6popf8b2",
		"content": "Use the wireless USB hard drive, then you can quantify the virtual bandwidth!",
		"createdAt": 1642806917767,
		"author": {
			"name": "Harry Prosacco",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "u9fa30018yp",
					"content": "Try to compress the HDD array, maybe it will program the haptic sensor!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "ox4vv3wqzj",
					"content": "I'll hack the primary CSS bus, that should hard drive the SQL card!",
					"power": 6
				},
				{
					"id": "aknljdjdmzk",
					"content": "We need to copy the back-end PCI pixel!",
					"power": 35
				}
			],
			"opposition": [
				{
					"id": "plcg0umb14i",
					"content": "Try to calculate the IB sensor, maybe it will transmit the wireless hard drive!",
					"power": 2
				}
			]
		}
	},
	{
		"id": "aknljdjdmzk",
		"content": "We need to copy the back-end PCI pixel!",
		"createdAt": 1616508258101,
		"author": {
			"name": "Johnathan Dickens III",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "j43bz27pzp",
					"content": "If we transmit the capacitor, we can get to the CSS firewall through the virtual EXE card!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "8mshnbexqgw",
					"content": "You can't navigate the system without compressing the mobile RSS bandwidth!",
					"power": 2
				}
			],
			"opposition": [
				{
					"id": "wdlzw64cwqm",
					"content": "If we connect the capacitor, we can get to the AI driver through the digital SMS application!",
					"power": 8
				}
			]
		}
	},
	{
		"id": "bu8gay43fav",
		"content": "I'll input the wireless SSL bus, that should matrix the AGP bus!",
		"createdAt": 1643069676422,
		"author": {
			"name": "Terrence Beer",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "4jhq956i0aw",
					"content": "If we override the hard drive, we can get to the PCI circuit through the solid state PCI pixel!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "8mshnbexqgw",
					"content": "You can't navigate the system without compressing the mobile RSS bandwidth!",
					"power": 6
				},
				{
					"id": "x8j2bockhz",
					"content": "overriding the alarm won't do anything, we need to index the bluetooth AGP capacitor!",
					"power": 15
				},
				{
					"id": "5oax5v5vxqp",
					"content": "If we reboot the feed, we can get to the SMTP circuit through the wireless SCSI card!",
					"power": 4
				}
			],
			"opposition": [
				{
					"id": "4jhq956i0aw",
					"content": "If we override the hard drive, we can get to the PCI circuit through the solid state PCI pixel!",
					"power": 7
				},
				{
					"id": "bwjxtboowpa",
					"content": "Try to override the SMTP matrix, maybe it will navigate the virtual alarm!",
					"power": 1
				}
			]
		}
	},
	{
		"id": "0f9347bd1gb",
		"content": "If we transmit the card, we can get to the JSON monitor through the 1080p ADP alarm!",
		"createdAt": 1614111268930,
		"author": {
			"name": "Victor Powlowski",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "x8j2bockhz",
					"content": "overriding the alarm won't do anything, we need to index the bluetooth AGP capacitor!"
				}
			],
			"opposition": [
				{
					"id": "tv1txaauu7l",
					"content": "Try to compress the PNG monitor, maybe it will back up the back-end hard drive!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "yu8toemd1q8",
					"content": "We need to compress the auxiliary CSS circuit!",
					"power": 5
				}
			],
			"opposition": [
				{
					"id": "5xe89fsnxhp",
					"content": "Use the mobile XML microchip, then you can back up the solid state protocol!",
					"power": 3
				},
				{
					"id": "j55a6d98axk",
					"content": "Try to quantify the PNG pixel, maybe it will quantify the multi-byte bus!",
					"power": 2
				}
			]
		}
	},
	{
		"id": "g5cr7mf592s",
		"content": "Try to compress the SMS pixel, maybe it will hack the optical capacitor!",
		"createdAt": 1619465334973,
		"author": {
			"name": "Marcella Hartmann",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "te67wietqo",
					"content": "We need to compress the auxiliary HDD capacitor!"
				}
			],
			"opposition": [
				{
					"id": "9dugt0cadlu",
					"content": "I'll transmit the mobile JSON firewall, that should circuit the THX feed!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "tyx16zxqmms",
					"content": "We need to quantify the haptic AGP firewall!",
					"power": 8
				},
				{
					"id": "0yifx1qn6ls",
					"content": "The XML sensor is down, program the optical matrix so we can back up the SDD driver!",
					"power": 1
				}
			],
			"opposition": []
		}
	},
	{
		"id": "x8j2bockhz",
		"content": "overriding the alarm won't do anything, we need to index the bluetooth AGP capacitor!",
		"createdAt": 1641823734289,
		"author": {
			"name": "Brandi VonRueden",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "27u226ieq1h",
					"content": "Use the back-end SQL firewall, then you can reboot the neural monitor!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "plcg0umb14i",
					"content": "Try to calculate the IB sensor, maybe it will transmit the wireless hard drive!",
					"power": 2
				},
				{
					"id": "te67wietqo",
					"content": "We need to compress the auxiliary HDD capacitor!",
					"power": 15
				}
			],
			"opposition": [
				{
					"id": "4jhq956i0aw",
					"content": "If we override the hard drive, we can get to the PCI circuit through the solid state PCI pixel!",
					"power": 6
				}
			]
		}
	},
	{
		"id": "jy66sceq0z",
		"content": "If we program the transmitter, we can get to the XSS hard drive through the solid state AI card!",
		"createdAt": 1633165242086,
		"author": {
			"name": "Jeremiah Krajcik",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "5xe89fsnxhp",
					"content": "Use the mobile XML microchip, then you can back up the solid state protocol!"
				},
				{
					"id": "5oax5v5vxqp",
					"content": "If we reboot the feed, we can get to the SMTP circuit through the wireless SCSI card!"
				},
				{
					"id": "2pycu7lf4gy",
					"content": "Try to navigate the SAS transmitter, maybe it will quantify the wireless bus!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "ygsvmqxkax",
		"content": "We need to override the digital PNG sensor!",
		"createdAt": 1634293263058,
		"author": {
			"name": "Jamie Schuster",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "5xe89fsnxhp",
					"content": "Use the mobile XML microchip, then you can back up the solid state protocol!"
				}
			],
			"opposition": [
				{
					"id": "lukujzfvtr",
					"content": "You can't index the alarm without parsing the back-end SSL alarm!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "u9fa30018yp",
					"content": "Try to compress the HDD array, maybe it will program the haptic sensor!",
					"power": 35
				},
				{
					"id": "1s7knmd9o1y",
					"content": "Use the multi-byte PNG feed, then you can bypass the cross-platform array!",
					"power": 30
				}
			],
			"opposition": [
				{
					"id": "g5cr7mf592s",
					"content": "Try to compress the SMS pixel, maybe it will hack the optical capacitor!",
					"power": 6
				}
			]
		}
	},
	{
		"id": "k135mkn7si",
		"content": "You can't input the bandwidth without overriding the bluetooth JSON firewall!",
		"createdAt": 1612543674746,
		"author": {
			"name": "Wilbert Fahey",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "g5cr7mf592s",
					"content": "Try to compress the SMS pixel, maybe it will hack the optical capacitor!"
				},
				{
					"id": "hc6xpuirvm",
					"content": "connecting the hard drive won't do anything, we need to connect the cross-platform HTTP bus!"
				}
			],
			"opposition": [
				{
					"id": "ygsvmqxkax",
					"content": "We need to override the digital PNG sensor!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "zlg9h3ujpfc",
					"content": "Use the mobile FTP card, then you can generate the 1080p driver!",
					"power": 7
				},
				{
					"id": "8mshnbexqgw",
					"content": "You can't navigate the system without compressing the mobile RSS bandwidth!",
					"power": 6
				}
			],
			"opposition": [
				{
					"id": "tv1txaauu7l",
					"content": "Try to compress the PNG monitor, maybe it will back up the back-end hard drive!",
					"power": 1
				}
			]
		}
	},
	{
		"id": "bct57apoql5",
		"content": "Use the multi-byte SSL port, then you can input the haptic bus!",
		"createdAt": 1628007841909,
		"author": {
			"name": "Eleanor Mraz Jr.",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "27u226ieq1h",
		"content": "Use the back-end SQL firewall, then you can reboot the neural monitor!",
		"createdAt": 1614912441556,
		"author": {
			"name": "Bradley Ernser",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "jy66sceq0z",
					"content": "If we program the transmitter, we can get to the XSS hard drive through the solid state AI card!",
					"power": 1
				}
			],
			"opposition": [
				{
					"id": "q9mrqb4q60b",
					"content": "You can't hack the capacitor without transmitting the redundant SMS hard drive!",
					"power": 7
				},
				{
					"id": "9dugt0cadlu",
					"content": "I'll transmit the mobile JSON firewall, that should circuit the THX feed!",
					"power": 4
				},
				{
					"id": "g5cr7mf592s",
					"content": "Try to compress the SMS pixel, maybe it will hack the optical capacitor!",
					"power": 3
				}
			]
		}
	},
	{
		"id": "j43bz27pzp",
		"content": "If we transmit the capacitor, we can get to the CSS firewall through the virtual EXE card!",
		"createdAt": 1619577171905,
		"author": {
			"name": "Ms. Willard Reilly",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "7ar9mk7d7mb",
		"content": "You can't transmit the driver without generating the online SQL alarm!",
		"createdAt": 1632068390852,
		"author": {
			"name": "Hugo Bahringer",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "grwfn8xk4k",
					"content": "I'll synthesize the redundant SDD bus, that should card the COM hard drive!",
					"power": 5
				}
			]
		}
	},
	{
		"id": "haisipnotpq",
		"content": "hacking the system won't do anything, we need to synthesize the optical XSS capacitor!",
		"createdAt": 1639262138368,
		"author": {
			"name": "Hope Jast",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "bwjxtboowpa",
					"content": "Try to override the SMTP matrix, maybe it will navigate the virtual alarm!"
				}
			],
			"opposition": [
				{
					"id": "tyx16zxqmms",
					"content": "We need to quantify the haptic AGP firewall!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "0yifx1qn6ls",
					"content": "The XML sensor is down, program the optical matrix so we can back up the SDD driver!",
					"power": 1
				}
			],
			"opposition": [
				{
					"id": "s77ftsmfokh",
					"content": "I'll input the online SCSI transmitter, that should microchip the XSS monitor!",
					"power": 0
				},
				{
					"id": "5oax5v5vxqp",
					"content": "If we reboot the feed, we can get to the SMTP circuit through the wireless SCSI card!",
					"power": 5
				}
			]
		}
	},
	{
		"id": "zlg9h3ujpfc",
		"content": "Use the mobile FTP card, then you can generate the 1080p driver!",
		"createdAt": 1617098859029,
		"author": {
			"name": "Marion Kuvalis DVM",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "yu8toemd1q8",
					"content": "We need to compress the auxiliary CSS circuit!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "jy66sceq0z",
					"content": "If we program the transmitter, we can get to the XSS hard drive through the solid state AI card!",
					"power": 40
				}
			]
		}
	},
	{
		"id": "511dr99izpv",
		"content": "Use the auxiliary ADP interface, then you can program the redundant system!",
		"createdAt": 1614903405260,
		"author": {
			"name": "Drew Kuphal DVM",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "4jhq956i0aw",
					"content": "If we override the hard drive, we can get to the PCI circuit through the solid state PCI pixel!",
					"power": 7
				},
				{
					"id": "5djgq76ohpu",
					"content": "We need to transmit the wireless RAM array!",
					"power": 3
				},
				{
					"id": "ax6popf8b2",
					"content": "Use the wireless USB hard drive, then you can quantify the virtual bandwidth!",
					"power": 7
				}
			],
			"opposition": [
				{
					"id": "lukujzfvtr",
					"content": "You can't index the alarm without parsing the back-end SSL alarm!",
					"power": 3
				}
			]
		}
	},
	{
		"id": "a1cnx1utorl",
		"content": "The SMTP feed is down, hack the wireless driver so we can navigate the XML interface!",
		"createdAt": 1637027814324,
		"author": {
			"name": "Travis Dickinson",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "giq2fwvtk6a",
					"content": "Use the back-end COM firewall, then you can transmit the digital interface!"
				},
				{
					"id": "7ar9mk7d7mb",
					"content": "You can't transmit the driver without generating the online SQL alarm!"
				},
				{
					"id": "jy66sceq0z",
					"content": "If we program the transmitter, we can get to the XSS hard drive through the solid state AI card!"
				},
				{
					"id": "lukujzfvtr",
					"content": "You can't index the alarm without parsing the back-end SSL alarm!"
				}
			],
			"opposition": []
		},
		"usedHere": {
			"support": [
				{
					"id": "jy66sceq0z",
					"content": "If we program the transmitter, we can get to the XSS hard drive through the solid state AI card!",
					"power": 20
				},
				{
					"id": "8mshnbexqgw",
					"content": "You can't navigate the system without compressing the mobile RSS bandwidth!",
					"power": 0
				}
			],
			"opposition": []
		}
	},
	{
		"id": "te67wietqo",
		"content": "We need to compress the auxiliary HDD capacitor!",
		"createdAt": 1622530179042,
		"author": {
			"name": "Lee Shields",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "aknljdjdmzk",
					"content": "We need to copy the back-end PCI pixel!"
				},
				{
					"id": "4jhq956i0aw",
					"content": "If we override the hard drive, we can get to the PCI circuit through the solid state PCI pixel!"
				}
			],
			"opposition": [
				{
					"id": "k135mkn7si",
					"content": "You can't input the bandwidth without overriding the bluetooth JSON firewall!"
				},
				{
					"id": "0yifx1qn6ls",
					"content": "The XML sensor is down, program the optical matrix so we can back up the SDD driver!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "ax6popf8b2",
					"content": "Use the wireless USB hard drive, then you can quantify the virtual bandwidth!",
					"power": 3
				}
			],
			"opposition": [
				{
					"id": "grwfn8xk4k",
					"content": "I'll synthesize the redundant SDD bus, that should card the COM hard drive!",
					"power": 7
				},
				{
					"id": "wdlzw64cwqm",
					"content": "If we connect the capacitor, we can get to the AI driver through the digital SMS application!",
					"power": 8
				}
			]
		}
	},
	{
		"id": "9dugt0cadlu",
		"content": "I'll transmit the mobile JSON firewall, that should circuit the THX feed!",
		"createdAt": 1612796466439,
		"author": {
			"name": "Claudia Ernser",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "k205xu9lage",
					"content": "Use the virtual SQL bandwidth, then you can reboot the redundant program!",
					"power": 6
				}
			]
		}
	},
	{
		"id": "s77ftsmfokh",
		"content": "I'll input the online SCSI transmitter, that should microchip the XSS monitor!",
		"createdAt": 1638880985073,
		"author": {
			"name": "Marie Kris DVM",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "5oax5v5vxqp",
		"content": "If we reboot the feed, we can get to the SMTP circuit through the wireless SCSI card!",
		"createdAt": 1630734129346,
		"author": {
			"name": "Mrs. Corey Predovic",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": []
		},
		"usedHere": {
			"support": [],
			"opposition": []
		}
	},
	{
		"id": "giq2fwvtk6a",
		"content": "Use the back-end COM firewall, then you can transmit the digital interface!",
		"createdAt": 1622448175426,
		"author": {
			"name": "Alberta Schulist",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": [
				{
					"id": "bu8gay43fav",
					"content": "I'll input the wireless SSL bus, that should matrix the AGP bus!"
				},
				{
					"id": "hc6xpuirvm",
					"content": "connecting the hard drive won't do anything, we need to connect the cross-platform HTTP bus!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "zlg9h3ujpfc",
					"content": "Use the mobile FTP card, then you can generate the 1080p driver!",
					"power": 20
				}
			]
		}
	},
	{
		"id": "k205xu9lage",
		"content": "Use the virtual SQL bandwidth, then you can reboot the redundant program!",
		"createdAt": 1630896941809,
		"author": {
			"name": "Mr. Evelyn Skiles",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [],
			"opposition": [
				{
					"id": "tv1txaauu7l",
					"content": "Try to compress the PNG monitor, maybe it will back up the back-end hard drive!"
				},
				{
					"id": "9dugt0cadlu",
					"content": "I'll transmit the mobile JSON firewall, that should circuit the THX feed!"
				}
			]
		},
		"usedHere": {
			"support": [],
			"opposition": [
				{
					"id": "k205xu9lage",
					"content": "Use the virtual SQL bandwidth, then you can reboot the redundant program!",
					"power": 30
				}
			]
		}
	},
	{
		"id": "8mshnbexqgw",
		"content": "You can't navigate the system without compressing the mobile RSS bandwidth!",
		"createdAt": 1615593313710,
		"author": {
			"name": "Kristen Jacobi",
			"profileImageUrl": "https://thispersondoesnotexist.com/image"
		},
		"usedAt": {
			"support": [
				{
					"id": "k205xu9lage",
					"content": "Use the virtual SQL bandwidth, then you can reboot the redundant program!"
				}
			],
			"opposition": [
				{
					"id": "ygsvmqxkax",
					"content": "We need to override the digital PNG sensor!"
				},
				{
					"id": "jy66sceq0z",
					"content": "If we program the transmitter, we can get to the XSS hard drive through the solid state AI card!"
				}
			]
		},
		"usedHere": {
			"support": [
				{
					"id": "hc6xpuirvm",
					"content": "connecting the hard drive won't do anything, we need to connect the cross-platform HTTP bus!",
					"power": 5
				},
				{
					"id": "bu8gay43fav",
					"content": "I'll input the wireless SSL bus, that should matrix the AGP bus!",
					"power": 6
				},
				{
					"id": "tyx16zxqmms",
					"content": "We need to quantify the haptic AGP firewall!",
					"power": 0
				},
				{
					"id": "2pycu7lf4gy",
					"content": "Try to navigate the SAS transmitter, maybe it will quantify the wireless bus!",
					"power": 6
				}
			],
			"opposition": []
		}
	}
];