			// Attaches each regbox to a unique id for scrolling
			// Grabs the title and description for each regbox and uses it for query
			var queries = []
			$(".reg-projectbox").each(function(i) {
				$(this).attr('id', i)
				title = $(this).find(".reg-header").text()
				deets = $(this).find(".reg-deets").text()
				queries.push({"title" : title,
							  "description" : deets,
							  "id" : i})
			})
			var fuse = new Fuse(queries, {
				shouldSort: true,
				includeScore: true,
				threshold: 0.3,
				location: 0,
				distance: 100,
				maxPatternLength: 32,
				minMatchCharLength: 3,
				keys: ["title", "description"]
			})
			// Adds the dropdown menu for possible search queries
			// Fix with css pls make it pretty thank u
			$("#search-input").keyup(function() {
				var results = fuse.search($("#search-input").val())
				total = ''
				for(i = 0; i < results.length; i++) {
					total += "<a href='#"+results[i].item.id+"'>"+results[i].item.title+"</a><br/>"
				}
				$("#dropdown-search").html(total)
			})
			function search() {
				// Direct search (pressing the "Search" button)
				var results = fuse.search($("#search-input").val())
				if(results.length > 0) {
					// Assume we're picking the first entry in the results
					// Results are sorted so first entry is the most accurate match
					window.location.hash = '#'+results[0].item.id
				}
			}