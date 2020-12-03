# Algolia

## *Question 1*:

### Question

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

### Answer

Hi George,

Great to hear you embarking on this journey of search engine education.  I would be more than happy to help you understand these concepts!  Lets take them one by one:

**Records:**

A "record" is an object that may be added to an index so that it can be searched for. Records can contain any number of attributes. 

Examples of records include: 

- products;
- new articles; and
- health care records.

To put it to practice, lets say you are building a search engine for your product catalog - in that scenario, each product is a record. 

An example of a product record in json is included below: 

```bash
{
  "name": "Iphone 6 64Gb",
  "brand": "Apple",
  "color": "Gold",
  "categories": ["smartphone", "phone", "electronics"],
  "price": 789,
	"likes": 85
}
```

**Indexing: (REVISIT)**

"Indexing" is the act of taking the individual data (i.e., records) and adding each individual record to the search engine.  This can either be a push or pull process based on your use case. 

"Indexing" is effectively the process from which  original data from the source system (e.g., the individual products from the product catalog in the example above) and adding these records into the search engine. 

For ease of understanding, the indexing process allows for data (e.g., the json file of product records referenced above) to be extracted from the file and added into the search engine. 

**Custom Ranking**

Custom ranking gives you direct control to thoughtfully order results based on custom metrics within each record. It is often the deciding factor on which records appear in the first set of results. 

The metrics you would want to choose for custom ranking are relevant to your data.  For example: In the product record above, I would choose for custom ranking metrics `categories, color, and likes`.  That means when I am running a search for `gold iPhone` the product record above will show up higher on the result list then any other color iPhone in the results.  This happens because the **`color`** metric matches with `gold` within the query and record.  The custom ranking will then take this into account and apply a boost at query time for the gold iPhone record. 

Some other common metrics to use with custom ranking:

sales, views, likes, ratings, release date

For some further reading here are some links to the documentation around Custom Ranking:

[Custom ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/)

[Create custom ranking attributes](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/how-to/configure-custom-ranking/)

Please let me know if you have any questions.  I am more than happy to jump on a call with you to explain these concepts further.  Hope this helps!

Best regards,

Josh Goldstein

## *Question 2:*

### Question

 Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

### Answer

Hi Matt,

Sorry to hear that the updated dashboard design is not working well for you and your work-flow. I can definitely relate to the frustration of too many clicks during an iterative process. 

In this scenario, I would recommend writing a script that can clear and delete indices via the API. I have included a few links to our documentation below, which include code examples of clearing and deleting indices. 

[Create custom ranking attributes](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/how-to/configure-custom-ranking/)

That said, if after reviewing the documentation, you have additional questions or need anything else, I'm happy to jump on a call to help make your life a bit easier. 

Best regards,

Joshua 

## Question 3

### Question

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

### Answer

Hi Leo,

Thanks for showing interest in Algolia!  I would be more than happy to answer your questions.  First off to answer your development question the answer is no.  We at Algolia believe in building the best search experience with the least amount of resistance in adoption.  Our 3-step implementation process is as follows

1. Indexing your data into Algolia
2. Configuring relevance and ranking settings
3. Building a search user interface

I have provided some links below to our documentation that will help you understand the different steps in our process as well as an interactive tutorial you can follow.  Would you be willing to hop on a call on Thursday to go over your search needs in more detail?

[Algolia Docs](https://www.algolia.com/doc/)

[Implementation process](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/implementation-process/)

[How Algolia works](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/)

[Algolia - Hosted Search API Documentation](https://www.algolia.com/doc/onboarding/#/pick-dataset)

Best regards,

Josh Goldstein