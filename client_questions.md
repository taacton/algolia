## Question 1: 
Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing
I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

## Response:

Hi George,

I'd be happy to help you these concepts!

- Indexing is the process of making a structured data set searchable, you can have an index of anything as long as it has the same attributes (data-points).
- Records are the individual items inside the index. Each record can have multiple attributes.

Let's take a basic example using an index of animals, each record in the index would look something like this:
{name: 'spot', type:'dog'}, {name: 'whiskers', type:'cat'}

I can see that your website has a customer rating for each product, it might be useful to include this as a custom ranking and sort descending, so when search results are returned to the user we send back the highest rated products at the top.

If anything was unclear please let me know and we can setup a call to go through these together. Also, if you want to learn more you can try our interactive demo here: https://www.algolia.com/doc/onboarding/#/pick-dataset

Cheers,
Tom

---

## Question 2: 

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

## Response:

Hi Matt,

I'm really sorry to hear that you're having trouble with our dashboard after a recent update. This update was released with the goal of protecting users from accidentally deleting indexes with a single click, but I can understand that if it's an action you perform regularly it is slowing you down. 

I will pass you feedback to our development teams, is there any other way I can help you?

Thanks,
Tom

---

## Question 3: 

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

## Response: 

Hi Leo,

I'm happy to hear that you want to integrate us into your website, that's great news! We have very thorough documentation that can be found here: https://www.algolia.com/doc/ and should make the process quick and painless. 

First you will need to create an index and upload each record, this is a relatively simple and won't take long at all. You can do this through a script or directly though your dashboard on our website. 

Next you need to integrate our JavaScript library instantSearch.js (https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/js/), and you can use our pre-defined widgets to quickly implement search features into your website.

Finally you can configure the index ranking options through your dashboard on our website. It might be possible to get something working in as little as a couple hours!

Please feel free to reach out to us if you need any additional support getting things setup.

Thanks,
Tom