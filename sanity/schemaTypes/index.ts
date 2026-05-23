import {blog} from './blog'
import {caseStudy} from './caseStudy'
import {hiringGuide} from './hiringGuide'
import {insight} from './insight'
import {author} from './author'
import {category} from './category'
import {ctaBlock} from './shared/ctaBlock'
import {allPageBlocks} from './blocks/pageBlocks'

export const schemaTypes = [
  // Documents
  author,
  category,
  blog,
  caseStudy,
  hiringGuide,
  insight,
  // Shared objects
  ctaBlock,
  // Page builder blocks
  ...allPageBlocks,
]
