const filmes = [
    {
        "title":"10 Things I Hate About You",
        "year":"1999",
        "released":"31 Mar 1999",
        "runtime":"97 min",
        "genre":"Comedy, Drama, Romance",
        "director":"Gil Junger",
        "writer":"Karen McCullah, Kirsten Smith",
        "actors":"Heath Ledger, Julia Stiles, Joseph Gordon-Levitt, Larisa Oleynik",
        "plot":"A pretty, popular teenager can't go out on a date until her ill-tempered older sister does.",
        "language":"English, French",
        "country":"USA",
        "awards":"2 wins & 13 nominations."
    },
    {
        "title": "Avatar",
        "year": "2009",
        "released": "18 Dec 2009",
        "runtime": "162 min",
        "genre": "Action, Adventure, Fantasy, Sci-Fi",
        "director": "James Cameron",
        "writer": "James Cameron",
        "actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "plot": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "language": "English, Spanish",
        "country": "USA",
        "awards": "Won 3 Oscars. Another 86 wins & 129 nominations."
    },
    {
        "title":"Inception",
        "year":"2010",
        "rated":"PG-13",
        "released":"16 Jul 2010",
        "runtime":"148 min",
        "genre":"Action, Adventure, Sci-Fi, Thriller",
        "director":"Christopher Nolan",
        "writer":"Christopher Nolan",
        "actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "language":"English, Japanese, French",
        "country":"USA, UK",
        "awards":"Won 4 Oscars. Another 152 wins & 217 nominations."
    },
    {
        "title":"Doctor Strange",
        "year":"2016",
        "rated":"PG-13",
        "released":"04 Nov 2016",
        "runtime":"115 min",
        "genre":"Action, Adventure, Fantasy, Sci-Fi",
        "director":"Scott Derrickson",
        "writer":"Jon Spaihts, Scott Derrickson, C. Robert Cargill, Stan Lee (based on the Marvel comics by), Steve Ditko (based on the Marvel comics by)",
        "actors":"Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong",
        "plot":"While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
        "language":"English",
        "country":"USA",
        "awards":"Nominated for 1 Oscar. Another 20 wins & 65 nominations."
    },
    {
        "title":"The Truman Show",
        "year":"1998",
        "rated":"PG",
        "released":"05 Jun 1998",
        "runtime":"103 min",
        "genre":"Comedy, Drama, Sci-Fi",
        "director":"Peter Weir",
        "writer":"Andrew Niccol",
        "actors":"Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
        "plot":"An insurance salesman discovers his whole life is actually a reality TV show.",
        "language":"English",
        "country":"USA",
        "awards":"Nominated for 3 Oscars. Another 40 wins & 66 nominations."
    }
]





for (let i = 0; i< filmes.length; i++) {
    console.log("Title:",filmes[i].title)
    console.log("Awards:",filmes[i].awards)
    console.log("Genre:",filmes[i].genre)
    console.log("Filmes:",filmes[i].actors)
}

//o console vai imprimir para mim o title e o awards