# Normalized Source

PDF source: `C:\Users\Khanh PC\Downloads\network-engineer.pdf`

Pasted source: `C:\Users\Khanh PC\.codex\attachments\30f83920-d245-4c00-ae5b-437dd1ec40ef\pasted-text.txt`

---

```text
Network Engineer Roadmap
1. Introduction
Bài 1. How does the Internet Work?
Internet hoạt động như mạng lưới các mạng kết nối với nhau.
Dữ liệu được chia thành packet, đi qua router/switch, rồi được tái ghép ở đích.
Cần hiểu DNS, IP Address, TCP/UDP, HTTP/HTTPS ở mức tổng quan.
2. What are Networks?
Bài 2. Network Types
LAN: mạng nội bộ.
WAN: mạng diện rộng.
MAN: mạng đô thị.
WLAN: mạng LAN không dây.
PAN: mạng cá nhân.
SAN: mạng lưu trữ.
VPN: mạng riêng ảo.
Cloud Network: mạng trong môi trường cloud.
Bài 3. Network Architecture
Client-Server Network
Peer-to-Peer Network
3. Basic Terminology
Bài 4. Thuật ngữ mạng cơ bản
Client
Server
Host
Frame
Packet
Latency
Bandwidth
Throughput
Protocol
Socket
Port
IP Address
MAC Address
ARP
Transmission Media Types
4. Core Protocols
Bài 5. Giao thức mạng cốt lõi
HTTP / HTTPS
SSL / TLS
FTP / SFTP
SSH
NTP
SNTP
SMTP / IMAP
DHCP
5. Network Devices
Bài 6. Thiết bị mạng
Router
Switch
Hub
Modem
Access Point
Bài 7. Vai trò từng thiết bị
Router định tuyến giữa các mạng.
Switch kết nối thiết bị trong LAN.
Hub truyền dữ liệu đơn giản, ít thông minh hơn switch.
Modem kết nối mạng nội bộ với ISP.
Access Point cung cấp kết nối Wi-Fi.
6. OSI Model
Bài 8. 7 tầng OSI
Physical
Data Link
Network
Transport
Session
Presentation
Application
7. TCP/IP Model
Bài 9. TCP/IP Model
Network Access
Internet
Transport
Application
Bài 10. So sánh OSI và TCP/IP
OSI có 7 tầng, thiên về mô hình lý thuyết.
TCP/IP có 4 tầng, sát với triển khai thực tế trên Internet.
8. IP Addressing
Bài 11. Địa chỉ IP
IPv4 vs IPv6
Public vs Private Addresses
IP vs MAC vs ARP
Bài 12. IPv4 và IPv6
IPv4 dùng địa chỉ 32-bit.
IPv6 dùng địa chỉ 128-bit.
IPv6 giải quyết vấn đề cạn kiệt địa chỉ IPv4.
9. Subnetting
Bài 13. Subnet Masks
Subnet mask xác định phần network và phần host trong IP address.
Bài 14. CIDR
CIDR biểu diễn network prefix dạng /24, /16, /8, v.v.
Bài 15. VLSM
Variable Length Subnet Masking giúp chia mạng linh hoạt theo nhu cầu số host.
Bài 16. Supernetting
Gộp nhiều network nhỏ thành một network lớn hơn.
10. Routing
Bài 17. Routing cơ bản
Static vs Dynamic Routing
Default Gateway
Bài 18. Routing Protocols
OSPF
RIP
EIGRP
BGP
MPLS
Bài 19. Static vs Dynamic Routing
Static routing cấu hình thủ công.
Dynamic routing dùng protocol để tự động cập nhật route.
11. Switching
Bài 20. Switching cơ bản
VLANs
STP
Link Aggregation
MAC Address Tables
Bài 21. VLAN
VLAN chia một switch vật lý thành nhiều mạng logic.
Bài 22. STP
Spanning Tree Protocol giúp tránh loop trong mạng switch.
Bài 23. MAC Address Table
Switch dùng bảng MAC để biết frame cần gửi ra cổng nào.
12. DNS
Bài 24. DNS cơ bản
DNS chuyển domain name thành IP address.
Bài 25. DNS Servers
Cloudflare
Google
OpenDNS
Quad9
13. Wireless Networking
Bài 26. Wi-Fi và mạng không dây
Wi-Fi Standards
Wireless Security
Access Points & Controllers
Bluetooth Basics
Hotspot and Tethering
Mobile Networks
Bài 27. WPA vs WPS
WPA dùng để bảo mật Wi-Fi.
WPS giúp kết nối nhanh nhưng có thể gây rủi ro bảo mật nếu cấu hình kém.
14. Load Balancer
Bài 28. Load balancing
Round Robin
Least Connections
Failover
Bài 29. Các thuật toán cân bằng tải
Round Robin: chia request lần lượt.
Least Connections: gửi request đến server có ít kết nối nhất.
Failover: chuyển traffic sang node dự phòng khi node chính lỗi.
15. QoS - Quality of Service
Bài 30. QoS cơ bản
Traffic shaping
Packet prioritization
Bài 31. Khi nào dùng QoS?
Ưu tiên voice/video call.
Giảm nghẽn mạng.
Đảm bảo dịch vụ quan trọng có băng thông ổn định.
16. Network Security
Bài 32. Network Security Overview
Firewalls
VPNs
Encryption Basics
Network Attacks
IDS / IPS
Zero Trust Architecture
Bài 33. Firewalls
Packet Filtering
Stateful Inspection
Next-Generation Firewall
Proxy Firewall
Circuit Level Gateway
Web Application Firewall
Bài 34. VPNs
IPSec vs SSL VPN
Site-to-Site VPN
Remote Access VPN
Bài 35. Network Attacks
DoS
DDoS
Bài 36. IDS / IPS
IDS phát hiện xâm nhập.
IPS phát hiện và chặn xâm nhập.
Bài 37. Zero Trust Architecture
Không tin tưởng mặc định.
Luôn xác minh người dùng, thiết bị và quyền truy cập.
17. Network Observability
Bài 38. Observability trong mạng
Theo dõi traffic.
Phân tích lỗi.
Giám sát hiệu năng.
Phát hiện bất thường.
Bài 39. Network Observability Tools
Wireshark
Nmap
NetFlow / sFlow
SNMP
18. Related Roadmaps

Các roadmap liên quan:

DevOps Roadmap
System Design Roadmap
Shell/Bash Roadmap
Cybersecurity Roadmap
Backend Roadmap
Lộ trình học đề xuất
Giai đoạn 1: Nền tảng mạng

Học Internet hoạt động như thế nào, network types, terminology, core protocols.

Giai đoạn 2: Mô hình mạng

Học OSI Model, TCP/IP Model, IP Addressing, MAC, ARP, IPv4/IPv6.

Giai đoạn 3: Chia mạng và định tuyến

Học subnetting, CIDR, VLSM, routing, gateway, OSPF, RIP, EIGRP, BGP.

Giai đoạn 4: Switching và Wireless

Học VLAN, STP, link aggregation, Wi-Fi standards, access point, wireless security.

Giai đoạn 5: Network Services

Học DNS, DHCP, HTTP/HTTPS, SSH, FTP/SFTP, SMTP/IMAP, NTP.

Giai đoạn 6: Load Balancing và QoS

Học round robin, least connections, failover, traffic shaping, packet prioritization.

Giai đoạn 7: Security và Monitoring

Học firewall, VPN, IDS/IPS, Zero Trust, Wireshark, Nmap, NetFlow, SNMP.
```
