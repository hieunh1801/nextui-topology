const topoData = {
  // array of nodes - mỗi node đại biểu một điểm trên đồ thị
  nodes: [
    {
      id: 0,
      name: "DC 1",
      extraInfo: "Thong tin bổ sung",
    },
    {
      id: 1,
      name: "DC 2",
      extraInfo: "Thong tin bổ sung",
    },
    {
      id: 2,
      name: "DC 3",
      extraInfo: "Thong tin bổ sung",
    },
    {
      id: 3,
      name: "DC 4",
      extraInfo: "Thong tin bổ sung",
    },
  ],
  // array of links - mỗi link đại biểu một đường trên đồ thị
  links: [
    {
      id: 0,
      source: 0,
      target: 1,
      extraInfo: "Thong tin bổ sung",
    },
    {
      id: 1,
      source: 1,
      target: 2,
      extraInfo: "Thong tin bổ sung",
    },
    {
      id: 2,
      source: 0,
      target: 2,
      extraInfo: "Thong tin bổ sung",
    },
    {
      id: 3,
      source: 2,
      target: 0,
      extraInfo: "Thong tin bổ sung",
    },
  ],
  // array of node sets (groups)
  nodeSet: [
    {
      id: 3, // should not overlap any node's ID
      nodes: [1, 2],
    },
  ],
};
const initApplication = (nx, topologyData) => {
  const app = new nx.ui.Application();
  const topologyConfig = {
    nodeConfig: {
      label: "model.name",
      iconType: "router",
    },
    linkConfig: {
      linkType: "curve",
    },
    dataProcessor: "force",
    showIcon: true,
  };
  var topology = new nx.graphic.Topology(topologyConfig);
  topology.data(topologyData);
  topology.attach(app);
  app.container(document.getElementById("topoApp"));
  console.log(nx);
};

initApplication(nx, topoData);
