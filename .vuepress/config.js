module.exports = {
	base: '/doc-smile/docs/',
	dest: 'docs',
	title: 'Smile Doc',
	description: 'Just playing around',
	themeConfig : {
	  	nav : [
		  	{ text : 'Another Page', link : 'hello'}
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
	      '/examples/': [
	        'lottery/',
	        'driving-license/',
	        'bike-rental/' 
	      ],
	      '/training/': [
	        'scala-training',
	        'scala-tutorial-part1',
	        'scala-tutorial-part2',
	        'scala-tutorial-part3',
	        'scala-tutorial-part4',
	        'scala-assignment',
	        'smile-modules-overview',
	        'data-module',
	        'mongo-setup',
	        'mongo-module',
	        'domain-module',
	        'play-module',
	        'vue-training',
	        'vue-smile-training'

	      ],

	      // fallback
	      '/': [
	        '',        /* / */
	        'hello', /* /hello.html */
	        'introduction',    /* /introduction.html */
	        'getting-started/getting-started.md',
	        'examples/',
	        'training/'
	      ]
	    }
	}
}