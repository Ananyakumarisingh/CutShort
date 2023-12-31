# CutShort

[𝐔𝐑𝐋 𝐬𝐡𝐨𝐫𝐭𝐞𝐧𝐞𝐫 𝐬𝐲𝐬𝐭𝐞𝐦 𝐝𝐞𝐬𝐢𝐠𝐧 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧 ⚡]

Required APIs:

- POST /create/
- GET /${short-code}
- GET /analytics/${short-code} (optional)

Few clarifying questions to ask:

1. How much traffic do we expect, based on which we can determine the length of the `short code` length, helping us reduce storage?

2. Do we need analytics for the service?

3. How long do we want the expiration time?

etc.

Based on this, we can come up with a basic schema:

```
{
 originalUrl: string,
 shortCode: string,
 expiry: date::time,   // Currently it's not there but will be adding soon
 hitCount: number
}
```

Say we decide to generate a 7-character short code.

Solution 1 (Naive):

Step 1: We take a NoSQL database (for easy scalability and since we don't have a relational model) and store the above schema.

Step 2: We generate the short code using an algorithm "MD5/B62".

We redirect to `originalUrl` after receiving the `shortCode`.

[Problems with this approach]

Problem-1: What if two URLs have the same short code?

Answer: We ensure that if there's a short code that already exists, we generate a new one.

Problem-2: What if there are two different instances of the system running, and they generate the same short code simultaneously?

Answer: We can introduce a distributed token generation service or use a combination of timestamp and a server identifier to mitigate this.

You can think of more such problems and try to answer them!

By addressing these concerns, we can enhance the robustness and reliability of our URL shortener system.

Additionally, for improved scalability and performance, we can explore optimisations such as caching frequently accessed short codes and employing load balancing strategies in a distributed environment.
