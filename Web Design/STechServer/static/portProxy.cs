using static System.Console;
using static CANAPE.Cli.ConsoleUtils;

var template = new FixedProxyTemplate();
template.LocalPort = 5005;
template.Host = "192.168.0.6";
template.Port = 4005;

var service = template.Create();
service.start();

WriteLine("Created {0}", service);
WriteLine("Press Enter to Exit...");
ReadLine();
service.Stop();

var packets = service.Packets;
WriteLine("Captured {0} packets:", packets.Count);
WritePackets(packets);