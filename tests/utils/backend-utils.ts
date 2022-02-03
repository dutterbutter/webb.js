import {execSync, spawn, SpawnOptionsWithoutStdio} from "child_process";

function spawnWithLogger(command: string, options?: SpawnOptionsWithoutStdio) {
  const process = spawn(command, options);
  process.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  process.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  process.on('close', (code) => {
    console.log(` process ${process.pid} exited with code ${code}`);
  });

  return process;
}
export type KillTask = () => void
export function startDarkWebbNode(): KillTask {
  execSync(
    'docker pull ghcr.io/webb-tools/protocol-substrate-standalone-node:edge',
    { stdio: 'inherit' }
  );
  const node1 =
    'darkwebb-standalone-node  --dev --alice --node-key 0000000000000000000000000000000000000000000000000000000000000001 --ws-port=9944 --rpc-cors all';
  const node2 =
    'darkwebb-standalone-node --dev --bob --port 33334 --tmp --bootnodes /ip4/127.0.0.1/tcp/30333/p2p/12D3KooWEyoppNCUx8Yx66oV9fJnriXwCcXwDDUA2kj6vnc6iDEp --ws-port=9999';

  const getDockerCmd = (cmd: string, ports: number[]) => {
    return `docker run --network host  --rm ${ports.reduce(
      (acc, port) => `${acc} -p ${port}:${port}`,
      ''
    )} ghcr.io/webb-tools/protocol-substrate-standalone-node:edge  ${cmd}`;
  };

  const node1Cmd = getDockerCmd(node1, [9944, 30333]);
  const node2Cmd = getDockerCmd(node2 ,       [33334, 33334]);

  const node1Task = spawnWithLogger(
    node1Cmd,
    {
      shell: true,
    }
  );
  const node2task = spawnWithLogger(
    node2Cmd,
    {
      shell: true,
    }
  );
  return ()=>{
    node1Task.kill("SIGINT")
    node2task.kill("SIGINT")
  };
}