# Placement Groups

**Source URL:** https://docs.hetzner.cloud/reference/cloud#placement-groups

## Inhaltsverzeichnis

- [Placement Groups](#placement-groups)

---

## Placement Groups

Placement groups are used to influence the location of interdependent virtual servers in our data centers. The distribution of the different servers within a group is based on a pattern specified in the type. By enforcing certain rules on the placement of servers within our infrastructure, availability can be influenced in a way that fits your needs best.

In `spread` placement groups, all virtual servers will run on different physical servers. This decreases the probability that some servers might fail together.
