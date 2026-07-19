from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Node(BaseModel):
    id: str


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


@app.get("/")
def root():
    return {"message": "Backend Running"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):

    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    graph = {}

    for node in pipeline.nodes:
        graph[node.id] = []

    for edge in pipeline.edges:
        graph[edge.source].append(edge.target)

    visited = set()
    recursion = set()

    def has_cycle(node):
        visited.add(node)
        recursion.add(node)

        for neighbour in graph[node]:
            if neighbour not in visited:
                if has_cycle(neighbour):
                    return True
            elif neighbour in recursion:
                return True

        recursion.remove(node)
        return False

    is_dag = True

    for node in graph:
        if node not in visited:
            if has_cycle(node):
                is_dag = False
                break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }