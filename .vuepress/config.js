module.exports = {
	base: '/doc-smile/docs/',
	dest: 'docs',
	title: 'Smile',
	description: 'A Platform for building Enterprise Application.',
	head: [
	    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/icon/favicon-96x96.png` }]
	],
	themeConfig : {
		logo: '/smile_logo.png',
	  	nav : [
	  		{ text : 'Guide', link : '/guide/'},
		  	{ text : 'Examples', link : '/examples/'},
		  	{ text : 'Cookbook', link : '/cookbook/'},
		  	{ text : 'Training', link : '/training/'},
		  	{ text : 'Ecosystem', link : '/ecosystem/'}
	  	],
	  	sidebar: {

	      '/examples/lottery/' :[
	      	'',
	      	'lottery-phase-one',
	      	'lottery-phase-two',
	      	'lottery-phase-three',
	      	'lottery-phase-four'
	      ],
	      '/examples/bike-rental/' :[
 	      	'',
 	      	'page1'
	      ],
	      '/examples/foodbowl/':[
            'objectives'
 	      ],
	      '/examples/': [
	      	'',
	        'lottery/',
	        'driving-license/',
	        'bike-rental/',
	        'foodbowl/objectives'
	      ],
	      '/guide/': [
	        '',
	        'introduction',
	      ],
	      '/training/scala-training/': [
	      	'',
	        'scala-training',
	        'scala-tutorial-part1',
	        'scala-tutorial-part2',
	        'scala-tutorial-part3',
	        'scala-tutorial-part4',
	        'scala-assignment',

	      ],
	      '/training/smile-training/vue/': [
	      	'',
	        'vue-training',
	        'vue-smile-training'

	      ],
	      '/training/smile-training/': [
	      	'',
	        'smile-modules-overview',
	        'data-module',
	        'mongo-setup',
	        'mongo-module',
	        'domain-module',
	        'play-module',
	        'vue/',

	      ],
	      '/training/': [
	      	'scala-training/',
	        'smile-training/',

	      ],
	      '/': [
	        '',  
	        'examples/'
	      ]
	    }
	}
}