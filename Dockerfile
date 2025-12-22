# Since this Dockerfile is different than the others, I am leaving some documentation here for future reference.
# @see https://dev.to/sebastiandg7/nx-nextjs-docker-the-nx-way-creating-the-nextjs-application-1efl
# @see https://dev.to/sebastiandg7/nx-nextjs-docker-the-nx-way-containerizing-our-application-1mi7
# @see https://nx.dev/nx-api/next/documents/overview
# @see https://medium.com/@wwdhfernando/efficient-deployment-of-next-js-24fd2825d6b4
# @see https://datawookie.dev/blog/2024/02/standalone-next-js-application-in-docker/
# @see https://www.youtube.com/watch?v=LVziN3yBtKU

#
# Build the docker image with `docker build -f Dockerfile . -t durmusdemirtas:latest`.
#
FROM docker.io/node:22-alpine

WORKDIR /app

RUN addgroup --system durmusdemirtas && \
  adduser --system -G durmusdemirtas durmusdemirtas

COPY .next/standalone/ durmusdemirtas/
COPY .next/static durmusdemirtas/.next/static
COPY public durmusdemirtas/public

RUN chown -R durmusdemirtas:durmusdemirtas .

CMD ["sh", "-c", "node durmusdemirtas/server.js"]

#
# Run the container with `docker run -d --name durmusdemirtas_container -p 3000:3000 -t durmusdemirtas`.
#